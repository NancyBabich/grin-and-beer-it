import React from 'react';
import styled from 'styled-components';

const BeerNumbers = ({ beerData }) => {
  const beerNumbers = beerData.map(data => (
    <DataBit key={data.type}>
      <DataType>{data.type}: </DataType>
      <span>{data.value}</span>
    </DataBit>
  ));

  return <BeerNumbersContainer>{beerNumbers}</BeerNumbersContainer>;
};

export default BeerNumbers;

const BeerNumbersContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const DataBit = styled.div`margin-right: 1rem;`;

const DataType = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`;
