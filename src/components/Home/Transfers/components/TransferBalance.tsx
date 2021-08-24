import { Group, Div, Card } from "@vkontakte/vkui";
import { CardTransferBalance } from "./miniComponents";

const TransferBalance = () => {
  return (
    <Div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          padding: 18,
          background: "var(--accent)",
          width: "100%",
          maxWidth: 340,
          minHeight: 100,
        }}
      >
        <CardTransferBalance />
      </Card>
    </Div>
  );
};

export default TransferBalance;
