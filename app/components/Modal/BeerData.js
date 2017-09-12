import React from 'react';
import styled from 'styled-components';

const BeerData = ({ data }) => (
  <DataBit>
    <DataType>{data.type}: </DataType>
    <span>{data.value}</span>
  </DataBit>
);

export default BeerData;

const DataBit = styled.div`margin-right: 1rem;`;

const DataType = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`;
