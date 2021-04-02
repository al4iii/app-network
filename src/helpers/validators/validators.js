export const reaquired = (value) => {
  if (value) return undefined;
  return "Field is requred";
};

export const maxLengthCreater = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbol`;
  return undefined;
};
