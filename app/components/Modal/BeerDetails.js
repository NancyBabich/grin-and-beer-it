import React from 'react';
import styled from 'styled-components';

import BeerNumbers from './BeerNumbers';
import Colors from '../../consts/colors';
import formatString from '../../helpers/formatString';
import Separator from './Separator';

const BeerDetails = ({
  abv,
  brewersTips,
  description,
  ebc,
  ibu,
  name,
  tagline
}) => {
  const beerData = [
    {
      type: 'ibu',
      value: ibu
    },
    {
      type: 'abv',
      value: `${abv}%`
    },
    {
      type: 'ebc',
      value: ebc
    }
  ];

  return (
    <BeerDetailsContainer>
      <Name>{name}</Name>
      <Tagline>{formatString(tagline)}</Tagline>
      <Separator />
      <BeerNumbers beerData={beerData} />
      <Paragraph>{description}</Paragraph>
      <Paragraph>
        <Heading>Brewer's Tips</Heading>
        {brewersTips}
      </Paragraph>
    </BeerDetailsContainer>
  );
};

export default BeerDetails;

const BeerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-weight: 700;

  @media screen and (max-width: 730px) {
    font-size: 0.9rem;
  }
`;

const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 700;

  @media screen and (max-width: 730px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.div`
  margin-top: 1.5rem;
  line-height: 1.25;
  padding-right: 2rem;

  @media screen and (max-width: 730px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 450px) {
    padding-right: 0.5rem;
  }
`;

const Tagline = styled.div`
  color: ${Colors.gray};

  @media screen and (max-width: 730px) {
    font-size: 1rem;
  }
`;
