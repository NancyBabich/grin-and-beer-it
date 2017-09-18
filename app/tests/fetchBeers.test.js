import expect from 'expect';

describe('fetchBeers', () => {
  it('Should fetch first 20 beers from API', done => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then(res => res.json())
      .then(beers => {
        expect(beers.length).toBe(20);
        expect(beers[0].id).toBe(1);
      })
      .then(() => done(), done);
  });
});
