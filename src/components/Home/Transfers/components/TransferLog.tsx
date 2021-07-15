import { RichCell } from "..";

const TransferLog = () => {
  return (
    <div style={{ marginTop: 10 }}>
      <RichCell
        operation="SEND"
        value={`1 тыс.`}
        caption={'Дмитрий'}
      />
      <RichCell
        operation="ADD"
        value={`1 тыс.`}
        caption={'Дмитрий'}
      />
      <RichCell
        operation="ADD"
        value={`1 тыс.`}
        caption={'Артур'}
      />
    </div>
  );
};

export default TransferLog;
