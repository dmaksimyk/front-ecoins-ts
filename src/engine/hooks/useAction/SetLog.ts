/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
const SetLog = async (
  id: number,
  amount: number | string,
  type: 'SEND' | 'ME',
  arr: any,
) => {
  const newArr = [
    ...[
      {
        id,
        amount: `${amount}`,
        type,
      },
    ],
    ...arr,
  ];

  return newArr;
};

export default SetLog;
