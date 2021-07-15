import { Separator } from "@vkontakte/vkui";
import { Header } from "components";

import { TransferLog, FastTransfer, TransferBalance } from "../components";

const TransferHome = () => {
  const sep = { padding: "8px 0" };
  return (
    <div style={{ width: "100vw" }}>
      <TransferBalance />
      <Separator style={sep as any} />
      <Header>Быстрые переводы</Header>
      <FastTransfer />
      <Separator style={sep as any} />
      <Header>История</Header>
      <TransferLog />
    </div>
  );
};

export default TransferHome;
