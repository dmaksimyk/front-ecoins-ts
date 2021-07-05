import { Button } from "@vkontakte/vkui";
import { Icon20Clear, Icon20Check } from "@vkontakte/icons";

const TransfersKeyboard = () => {
  const mode: "tertiary" = "tertiary";
  return (
    <>
      <div className="TransferCheckId-btns__container">
        <Button mode={mode}>1</Button>
        <Button mode={mode}>2</Button>
        <Button mode={mode}>3</Button>
      </div>
      <div className="TransferCheckId-btns__container">
        <Button mode={mode}>4</Button>
        <Button mode={mode}>5</Button>
        <Button mode={mode}>6</Button>
      </div>
      <div className="TransferCheckId-btns__container">
        <Button mode={mode}>7</Button>
        <Button mode={mode}>8</Button>
        <Button mode={mode}>9</Button>
      </div>
      <div className="TransferCheckId-btns__container">
        <Button mode={mode}>
          <Icon20Clear className="TransferCheckId-btns__container-img" />
        </Button>
        <Button mode={mode}>0</Button>
        <Button mode={mode}>
          <Icon20Check className="TransferCheckId-btns__container-img" />
        </Button>
      </div>
    </>
  );
};

export default TransfersKeyboard;
