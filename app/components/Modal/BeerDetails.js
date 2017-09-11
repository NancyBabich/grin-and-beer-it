import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import Separator from './Separator';

const BeerDetails = ({
  abv,
  brewersTips,
  description,
  ebc,
  ibu,
  name,
  tagline
}) => (
  <BeerDetailsContainer>
    <Name>{name}</Name>
    <Tagline>{tagline}</Tagline>
    <Separator />
    <Data>
      <DataBit>
        <DataType>ibu: </DataType>
        <Number>{ibu}</Number>
      </DataBit>
      <DataBit>
        <DataType>abv: </DataType>
        <Number>{abv}%</Number>
      </DataBit>
      <DataBit>
        <DataType>ebc: </DataType>
        <Number>{ebc}</Number>
      </DataBit>
    </Data>
    <Description>{description}</Description>
    <BrewersTips>
      <Heading>Brewer's Tips</Heading>
      {brewersTips}
    </BrewersTips>
  </BeerDetailsContainer>
);

export default BeerDetails;

const BeerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrewersTips = styled.div``;

const Data = styled.div`display: flex;`;

const DataBit = styled.div``;

const DataType = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`;

const Description = styled.div``;

const Heading = styled.div`font-weight: 700;`;

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Number = styled.span``;

const Tagline = styled.div`color: ${Colors.gray};`;
