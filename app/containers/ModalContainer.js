import React, { Component } from 'react';

import Modal from '../components/Modal';

export default class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abv: null,
      brewerTips: '',
      description: '',
      ibu: null,
      imgSrc: '',
      isLoading: true,
      name: '',
      tagline: ''
    };
  }

  componentDidMount() {
    this.fetchBeer();
  }

  fetchBeer = () => {
    const beerId = this.props.match.params.beerId;
    const url = `https://api.punkapi.com/v2/beers/${beerId}`;

    fetch(url)
      .then(res => res.json())
      .then(beer => {
        if (beer.length && beer[0]) {
          const { abv, description, ibu, name, tagline } = beer[0];
          this.setState({
            abv,
            description,
            ibu,
            name,
            tagline,
            brewerTips: beer.brewer_tips,
            imgSrc: beer.image_url,
            isLoading: false
          });
        }
      });
    // .catch((err) => this.setState({isError: true}))
  };

  render() {
    const {
      abv,
      brewerTips,
      description,
      ibu,
      imgSrc,
      isLoading,
      name,
      tagline
    } = this.state;

    return (
      <Modal
        abv={abv}
        brewerTips={brewerTips}
        description={description}
        ibu={ibu}
        imgSrc={imgSrc}
        isLoading={this.state.isLoading}
        name={name}
        tagline={tagline}
      />
    );
  }
}
