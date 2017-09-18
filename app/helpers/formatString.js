const formatString = string => {
  const withoutParentheses = string.replace(/ *\([^)]*\) */g, ' ');
  const withoutFinalFullstop = withoutParentheses.split('.')[0];
  const withoutHyphens = withoutFinalFullstop.split('- ')[0];
  const formattedText = withoutHyphens;
  return formattedText;
};

export default formatString;
