const formatString = string => {
  const withoutParentheses = string.split('(')[0];
  const withoutFinalFullstop = withoutParentheses.split('.')[0];
  const withoutHyphens = withoutFinalFullstop.split('- ')[0];
  const formattedText = withoutHyphens;
  return formattedText;
};

export default formatString;
