import expect from 'expect';

describe('fetchBeers method in ModalContainer', () => {
  it('Should fetch specific beer from API', done => {
    fetch('https://api.punkapi.com/v2/beers/25')
      .then(res => res.json())
      .then(beer => {
        expect(beer[0].id).toBe(25);
      })
      .then(() => done(), done);
  });
});
