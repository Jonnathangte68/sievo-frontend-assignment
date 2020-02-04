export const transformUtf8 = text => {
  return unescape(encodeURIComponent(text.toUpperCase()));
};

export const checkFloat = floatNumber => {
  return (
    !(String(parseInt(floatNumber)).length === floatNumber.length) &&
    !isNaN(Number(floatNumber.trim()))
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

export const reverseList = list => {
  let temp = [];
  for (let i = list.length - 1; i >= 0; i--) {
    temp.push(list[i]);
  }
  return temp;
};

export const bubbleSort = (list, order) => {
  list.sort(matcher);
  if (order && order === "DESC") {
    return reverseList(list);
  }
  return list;
};

const matcher = (left, right) => {
  // Order by project first
  if (left.project < right.project) {
    return -1;
  }
  if (left.project > right.project) {
    return 1;
  }
  // If projects match then order by description
  if (left.project === right.project) {
    if (left.description < right.description) {
      return -1;
    }
    if (left.description > right.description) {
      return 1;
    }
  }
  // Default order equals by project and description so returns 0
  return 0;
};
