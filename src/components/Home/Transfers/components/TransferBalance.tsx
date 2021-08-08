import { useRecoilValue } from "recoil";
import { FormItem, Title, Group, InfoRow, Card, Header, Div } from "@vkontakte/vkui";
import { BALANCE, ID } from "engine/state";
import InputId from "./InputId";

const TransferBalance = () => {
  const balance = useRecoilValue(BALANCE);
  const wallet = useRecoilValue(ID);
  return (
    <Group header={<Header>Ваша карта</Header>}>
      <Div>
        <Card style={{ padding: 12, marginTop: 8 }}>
          <FormItem className="TransferBalance__FormItem" top="Баланс">
            <Title weight="regular" style={{ padding: 0 }} level="1">
              {balance}
            </Title>
          </FormItem>
          <InfoRow style={{ marginTop: 12 }} header="Номер счёта">
            {wallet}
          </InfoRow>
        </Card>
      </Div>
      <Group header={<Header>Переводы</Header>}>
        <Div>
          <InputId />
        </Div>
      </Group>
    </Group>
  );
};

export default TransferBalance;
