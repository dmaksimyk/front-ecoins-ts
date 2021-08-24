import { IconButton, Input } from "@vkontakte/vkui";
import { Icon24ArrowRightOutline } from "@vkontakte/icons";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { TRANSFER_ID } from "engine/state";
import useAction from "engine/hooks/useAction";
import { useNavigation } from "engine";

const InputId = () => {
  const navigation = useNavigation()
  const action = useAction();
  const setId = useSetRecoilState(TRANSFER_ID);

  const refInput = useRef(null);

  const [value, setValue] = useState<string | number>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const nextPage = () => {
    const field: any = refInput.current;
    if (field) {
      field.blur();
      navigation.nextPage({activeModal: 'nextTransfer'})
      setId(Number(value));
    }
  };

  const changeInput = async (e: any) => {
    const cropNumber = await action.getNumbers(/[0-9]/, e.target.value, 12);

    if (+cropNumber.number || cropNumber.number === "") {
      setValue(cropNumber.number);
      return setDisabled(cropNumber.status);
    }
    return setDisabled(false);
  };

  const keyPress = (e: any) => {
    if (disabled && e.charCode === 13) {
      nextPage();
    }
  };

  return (
    <Input
      id="InputId__input"
      getRef={refInput}
      onChange={(e) => changeInput(e)}
      onKeyPress={(e) => keyPress(e)}
      after={
        <IconButton
          disabled={!disabled}
          onClick={() => nextPage()}
          activeMode="opacity"
        >
          <Icon24ArrowRightOutline />
        </IconButton>
      }
      placeholder="Номер карты получателя"
      value={value}
    />
  );
};

export default InputId;
