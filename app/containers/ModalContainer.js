import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';

export default class ModalContainer extends Component {
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
      tagline: ''
    };
  }

  componentDidMount() {
    this.fetchBeers();
  }

  fetchBeers = () => {
    const beerId = this.props.match.params.beerId;
    const url = `https://api.punkapi.com/v2/beers/${beerId}`;

    fetch(url)
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
            this.fetchSimilarBeers(this.state.abv)
          );
        }
      });
    // .catch((err) => this.setState({isError: true}))
  };

  fetchSimilarBeers = abv => {
    const abvMin = Math.floor(abv);
    const abvMax = abvMin + 1;
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${abvMin}&abv_lt=${abvMax}`;

    fetch(url)
      .then(res => res.json())
      .then(beers => {
        if (beers.length) {
          const similarBeers = beers.slice(0, 3);
          this.setState({
            similarBeers,
            isLoadingSimilarBeers: false
          });
        }
      });
    // .catch((err) => this.setState({isError: true}))
  };

  render() {
    const {
      abv,
      brewersTips,
      description,
      ebc,
      ibu,
      imgSrc,
      isLoading,
      isLoadingSimilarBeers,
      name,
      similarBeers,
      tagline
    } = this.state;

    const isAnyLoading = isLoading && isLoadingSimilarBeers;
    !isAnyLoading && console.log(similarBeers);
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
        name={name}
        similarBeers={similarBeers}
        tagline={tagline}
      />
    );
  }
}
