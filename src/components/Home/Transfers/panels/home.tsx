import { TransferLog, TransferBalance, TransferInput } from "../__components";
import { Spacing } from "@vkontakte/vkui";

const TransferHome: React.FC = () => {
  return (
    <div className="TransferHome__panel">
      <TransferBalance />
      <Spacing separator="center" />
      <div><TransferInput /></div>
      <Spacing separator="center"/>
      <div><TransferLog /></div>
    </div>
  );
};

export default TransferHome;
