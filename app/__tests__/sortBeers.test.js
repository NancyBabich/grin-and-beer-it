import expect from 'expect';

import sortBeers from '../helpers/sortBeers';

describe('sortBeer', () => {
  it('should return an array of beers sorted alphabetically by name in ascending order', () => {
    const testBeers = [
      { name: 'TestBeerX' },
      { name: 'TestBeerC' },
      { name: 'TestBeerD' },
      { name: 'TestBeerA' },
      { name: 'TestBeerM' },
      { name: 'TestBeerE' }
    ];

    const expectedBeers = [
      { name: 'TestBeerA' },
      { name: 'TestBeerC' },
      { name: 'TestBeerD' },
      { name: 'TestBeerE' },
      { name: 'TestBeerM' },
      { name: 'TestBeerX' }
    ];

    const sortedBeers = sortBeers(testBeers, 'name', 'asc');

    expect(JSON.stringify(sortedBeers)).toBe(JSON.stringify(expectedBeers));
  });
});
