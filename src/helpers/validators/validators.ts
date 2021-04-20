export type FieldValidatorType = (value: string) => string | undefined;

export const reaquired: FieldValidatorType = (value) => {
  if (value) return undefined;
  return "Field is requred";
};

export const maxLengthCreater = (maxLength: number): FieldValidatorType => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbol`;
  return undefined;
};
