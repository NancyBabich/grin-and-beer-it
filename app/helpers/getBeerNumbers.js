import React from 'react';

import BeerData from '../components/Modal/BeerData';

const getBeerNumbers = beerData =>
  beerData.map(data => <BeerData data={data} key={data.type} />);

export default getBeerNumbers;
