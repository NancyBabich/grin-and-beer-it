import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../components/Modal/Modal';
import { toggleModalState } from '../actions/index';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abv: null,
      brewersTips: '',
      description: '',
      ebc: null,
      ibu: null,
      imgSrc: '',
      isLoadingBeer: true,
      isLoadingSimilarBeers: true,
      name: '',
      similarBeers: [],
      status: null,
      tagline: ''
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(toggleModalState(true));
    this.fetchBeers();
  }

  componentWillUnmount() {
    this.props.dispatch(toggleModalState(false));
  }

  fetchBeers = () => {
    const beerId = this.props.match.params.beerId;
    const url = `https://api.punkapi.com/v2/beers/${beerId}`;

    fetch(url)
      .then(res => {
        this.setState({ status: res.status });
        return res;
      })
      .then(res => res.json())
      .then(beer => {
        if (beer.length && beer[0]) {
          const { abv, description, ebc, ibu, name, tagline } = beer[0];
          this.setState(
            {
              abv,
              description,
              ebc,
              ibu,
              name,
              tagline,
              brewersTips: beer[0].brewers_tips,
              imgSrc: beer[0].image_url,
              isLoadingBeer: false
            },
            this.fetchSimilarBeers(abv)
          );
        }
      })
      .catch(err => console.log(err));
  };

  fetchSimilarBeers = abv => {
    const abvMin = Math.floor(abv);
    const abvMax = abvMin + 1;
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${abvMin}&abv_lt=${abvMax}`;
    fetch(url)
      .then(res => res.json())
      .then(beers => {
        if (beers.length) {
          const similarBeers = beers
            .sort((a, b) => {
              const diffA = Math.abs(abv - a.abv);
              const diffB = Math.abs(abv - b.abv);
              return diffA - diffB;
            })
            .slice(0, 3);

          this.setState({
            similarBeers,
            isLoadingSimilarBeers: false
          });
        }
      })
      .catch(err => {
        throw err;
        this.setState({ isError: true });
      });
  };

  render() {
    const {
      abv,
      brewersTips,
      description,
      ebc,
      ibu,
      imgSrc,
      isLoadingBeer,
      isLoadingSimilarBeers,
      name,
      similarBeers,
      status,
      tagline
    } = this.state;

    const isAnyLoading = !status && isLoadingBeer && isLoadingSimilarBeers;

    const isError = status >= 300 && status < 500;

    return (
      <Modal
        abv={abv}
        brewersTips={brewersTips}
        description={description}
        ebc={ebc}
        ibu={ibu}
        id={this.props.match.params.beerId}
        imgSrc={imgSrc}
        isAnyLoading={isAnyLoading}
        isError={isError}
        name={name}
        similarBeers={similarBeers}
        tagline={tagline}
      />
    );
  }
}

export default connect(state => {
  return {
    isModal: state.isModal
  };
})(ModalContainer);
