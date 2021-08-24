import { Group, Div, Card } from "@vkontakte/vkui";
import InputId from "./InputId";
import { StyledHeader } from "components";
import { CardTransferBalance } from "./miniComponents";

const TransferBalance = () => {
  return (
    <Group header={<StyledHeader title="Карта" />}>
      <Div>
        <Card style={{ padding: 18, background: "var(--accent)" }}>
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
