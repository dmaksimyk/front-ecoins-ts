/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
const getNums = (regex: RegExp, value: any, maxNum: number) => {
  value = value.replace(/\D/g, '');
  if (value === '') return { number: '', status: false };
  if (!regex.test(value)) return { number: value, status: false };
  return { number: Math.ceil(value.slice(0, maxNum)), status: true };
};

export default getNums;
