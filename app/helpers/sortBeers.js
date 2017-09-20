const sortBeers = (beers, sortingCategory, sortingOrder) => {
  if (sortingCategory && sortingOrder) {
    return beers.slice().sort((a, b) => {
      if (sortingOrder === 'asc')
        return a[sortingCategory] < b[sortingCategory] ? -1 : 1;
      else return a[sortingCategory] < b[sortingCategory] ? 1 : -1;
    });
  } else return beers;
};

export default sortBeers;
