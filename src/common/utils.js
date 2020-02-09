import arraySort from "array-sort";

export const transformUtf8 = text => {
  return unescape(encodeURIComponent(text.toUpperCase()));
};

export const checkFloat = floatNumber => {
  return (
    !(String(parseInt(floatNumber)).length === floatNumber.length) &&
    !isNaN(Number(String(floatNumber).trim()))
  );
};

export const addZeros = date => {
  if (date.length === 1) {
    return "0" + date.slice(-2);
  }
  return date;
};

export const isDate = dateString =>
  Date.parse(dateString) && dateString.length > 1;

export const bubbleSort = (list, order) => {
  return order === "ASC"
    ? arraySort([...list], "project")
    : arraySort([...list], "project", { reverse: true });
};
