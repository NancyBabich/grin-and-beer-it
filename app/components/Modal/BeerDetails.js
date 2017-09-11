import React from 'react';
import styled from 'styled-components';

import BeerNumbers from './BeerNumbers';
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
}) => {
  const beerData = [
    {
      type: 'abv',
      value: abv
    },
    {
      type: 'ebc',
      value: ebc
    },
    {
      type: 'ibu',
      value: ibu
    }
  ];

  return (
    <BeerDetailsContainer>
      <Name>{name}</Name>
      <Tagline>{tagline}</Tagline>
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

const Heading = styled.div`font-weight: 700;`;

const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Paragraph = styled.div`
  margin-top: 1.5rem;
  line-height: 1.25;
`;

const Tagline = styled.div`color: ${Colors.gray};`;
