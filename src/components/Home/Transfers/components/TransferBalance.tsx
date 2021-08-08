import { useRecoilValue } from "recoil";
import { FormItem, Title, Div } from "@vkontakte/vkui";
import { BALANCE } from "engine/state";
import InputId from "./InputId";

const TransferBalance = () => {
  const balance = useRecoilValue(BALANCE);
  return (
    <Div style={{ paddingBottom: 8 }}>
      <FormItem className="TransferBalance__FormItem" top="Баланс">
        <Title weight="regular" style={{ padding: 0 }} level="1">
          {balance}
        </Title>
      </FormItem>
      <FormItem className="TransferBalance-FormItem__input" top="Перевод">
        <InputId />
      </FormItem>
    </Div>
  );
};

export default TransferBalance;
