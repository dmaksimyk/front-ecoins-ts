import { Button, Div, IconButton, Input, Separator } from "@vkontakte/vkui";
import { Icon24Cancel, Icon24MoneySendOutline } from "@vkontakte/icons";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { SYMBOLS_RUB, TRANSFER_ID, TRANSFER_NAME } from "engine/state";
import useAction from "engine/hooks/useAction";
import { useNavigation } from "engine";

const InputValue = () => {
  const action = useAction();
  const navigation = useNavigation();
  const name = useRecoilValue(TRANSFER_NAME);
  const user_id = useRecoilValue(TRANSFER_ID);

  const refInput = useRef(null);

  const [value, setValue] = useState<string | number>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const confirmTransfer = () => {
    const field: any = refInput.current;
    if (field) {
      field.blur();
      action.setTransferLog(user_id || 1, value, "ME");
      navigation.backPage();
    }
  };

  const changeInput = async (e: any) => {
    const cropNumber = await action.getNumbers(/[0-9]/, e.target.value, 5);

    if (+cropNumber.number || cropNumber.number === "") {
      setValue(cropNumber.number);
      return setDisabled(cropNumber.status);
    }
    return setDisabled(false);
  };

  const keyPress = (e: any) => {
    e.charCode === 13 && confirmTransfer();
  };

  return (
    <>
      <Div style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 6 }}>
        <Input
          disabled={name === ""}
          getRef={refInput}
          onChange={(e) => changeInput(e)}
          onKeyPress={(e) => keyPress(e)}
          after={

            <IconButton
              disabled={!disabled || name === ""}
              onClick={() => setValue("")}
              activeMode="opacity"
            >
              <Icon24Cancel />
            </IconButton>
          }
          placeholder={`Сумма от 1 ${SYMBOLS_RUB} до 99 999 ${SYMBOLS_RUB}`}
          value={value}
        />
      </Div>
      <Separator />
      <Div style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Button
          onClick={() => confirmTransfer()}
          disabled={!disabled || name === ""}
          size="l"
          mode="commerce"
          stretched
        >
          Перевести
        </Button>
      </Div>
    </>
  );
};

export default InputValue;
