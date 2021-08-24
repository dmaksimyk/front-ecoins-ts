import { Group, Div, Card } from "@vkontakte/vkui";
import InputId from "./InputId";
import { StyledHeader } from "components";
import { CardTransferBalance } from "./miniComponents";

const TransferBalance = () => {
  return (
    <Group header={<StyledHeader title="Карта" />}>
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
      <Group header={<StyledHeader title="Перевод" />}>
        <Div>
          <InputId />
        </Div>
      </Group>
    </Group>
  );
};

export default TransferBalance;
