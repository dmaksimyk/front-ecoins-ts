import { User } from "components";

import { FastTransfer } from "../components";

const TransferHome = () => {
  return (
    <div>
      <User container={<></>} more={false} />
      <FastTransfer />
    </div>
  );
};

export default TransferHome;
