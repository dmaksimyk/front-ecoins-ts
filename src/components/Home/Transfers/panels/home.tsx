import { TransferLog, TransferBalance, TransferInput } from "../components";
import { Spacing } from "@vkontakte/vkui";

const TransferHome = () => {
  return (
    <div style={{ width: "100vw" }}>
      <TransferBalance />
      <Spacing separator="center" />
      <div><TransferInput /></div>
      <Spacing separator="center"/>
      <div><TransferLog /></div>
    </div>
  );
};

export default TransferHome;
