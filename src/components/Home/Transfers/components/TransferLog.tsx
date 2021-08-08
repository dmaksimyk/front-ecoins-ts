import { TRANSFER_LOG } from "engine/state";
import { useRecoilValue } from "recoil";
import { RichCell } from "..";

const TransferLog = () => {
  const log = useRecoilValue(TRANSFER_LOG);
  return (
    <div style={{ marginTop: 10 }}>
      {log.map((item, index) => (
        <RichCell
          key={index + item.id}
          operation={item.type}
          value={item.amount}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default TransferLog;
