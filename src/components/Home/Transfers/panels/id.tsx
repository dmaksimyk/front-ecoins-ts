import { TransfersKeyboard } from '../components'

const TransferCheckId = () => {
  return (
    <div className="TransferCheckId__container">
      <div className="TransferCheckId-text__container">
        <p className="TransferCheckId__container-text">12154654</p>
        <p className="TransferCheckId__container-text">5</p>
      </div>
      <div className="TransferCheckId">
        <TransfersKeyboard />
      </div>
    </div>
  );
};

export default TransferCheckId;
