import { Div, Footer, InfoRow } from "@vkontakte/vkui";
import { TRANSFER_LOG } from "engine/state";
import { useRecoilValue } from "recoil";
import { RichCell } from "..";

const TransferLog = () => {
  const log = useRecoilValue(TRANSFER_LOG);
  return (
    <Div>
      <InfoRow header="Последние 20 транзакций">
        {log.length < 1 ? (
          <Footer>У вас нет транзакций</Footer>
        ) : (
          log.map((item, index) => (
            <RichCell
              key={index + item.id}
              operation={item.type}
              value={item.amount}
              id={item.id}
            />
          ))
        )}
      </InfoRow>
    </Div>
  );
};

export default TransferLog;
