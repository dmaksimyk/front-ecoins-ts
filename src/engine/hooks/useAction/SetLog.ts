const SetLog = async (
  id: number,
  amount: number | string,
  type: "SEND" | "ME",
  arr: any
) => {

  const newArr = [
    ...[
      {
        id: id,
        amount: `${amount}`,
        type: type,
      },
    ],
    ...arr,
  ];

  return newArr
};

export default SetLog;
