import expect from 'expect';

import formatString from '../helpers/formatString';

describe('formatString', () => {
  it('should return string without parenthetical sequences, hyphens and ending fullstops', () => {
    const unformattedString = 'Hello (everyone) world- my name is Xylion.';
    const formattedString = formatString(unformattedString);
    const expectedString = 'Hello world';

    expect(formattedString).toBe(expectedString);
  });
});
