import { useRecoilValue } from "recoil";
import { Text, Title, Button } from "@vkontakte/vkui";
import { BALANCE } from "engine/state";

const TransferBalance = () => {
  const balance = useRecoilValue(BALANCE);
  return (
    <div style={{ margin: '8px 16px' }}>
      <Text
        style={{ color: "var(--text_secondary)", fontSize: 13 }}
        weight="regular"
      >
        Ваш баланс:
      </Text>
      <Title weight="regular" level="1">
        {balance}
      </Title>
      <Button stretched mode="outline" style={{ marginTop: 16 }}>Перевести</Button>
    </div>
  );
};

export default TransferBalance;
