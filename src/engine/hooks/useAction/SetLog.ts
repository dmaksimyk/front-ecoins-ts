import { useCallbackState } from "engine";
import { TRANSFER_LOG } from "engine/state";

const SetLog = async (
  id: number,
  amount: number | string,
  type: "SEND" | "ME"
) => {
  const [log, setLogTransfer] = useCallbackState(TRANSFER_LOG);

    console.log(await log());

  // const newArr = [
  //   ...[
  //     {
  //       id: id,
  //       amount: `${amount}`,
  //       type: type,
  //     },
  //   ],
  //   ...log,
  // ];

  // setLog(newArr);
};

export default SetLog;
