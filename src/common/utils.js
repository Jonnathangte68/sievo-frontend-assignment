export const transformUtf8 = text => {
  return unescape(encodeURIComponent(text.toUpperCase()));
};
