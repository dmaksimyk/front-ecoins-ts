const getNums = (regex: RegExp, value: any, maxNum: number) => {
  value = value.replace(/\D/g, "");
  if (value === "") return { number: "", status: false };
  if (!regex.test(value)) return { number: value, status: false };
  return { number: Math.ceil(value.slice(0, maxNum)), status: true };
};

export default getNums;
