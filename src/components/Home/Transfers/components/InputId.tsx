import { FormItem, IconButton, Input } from "@vkontakte/vkui";
import { Icon24ArrowRightOutline } from "@vkontakte/icons";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { TRANSFER_ID, TRANSFER_PANEL } from "engine/state";

const InputId = () => {
  const setNextPanel = useSetRecoilState(TRANSFER_PANEL);
  const setId = useSetRecoilState(TRANSFER_ID);

  const [value, setValue] = useState<string | number>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const nextPage = () => {
    let field: any = document.getElementById("InputId__input");
    field.blur();
    setNextPanel(1);
    setId(Number(value));
  };

  const changeInput = (e: any) => {
    const inputValue = e.target.value;
    const num = 9999999999999999;
    setDisabled(false);

    if (!+inputValue || +inputValue < 1) {
      setDisabled(false);
      return setValue("");
    }

    if (+inputValue > num) {
      setDisabled(true);
      return setValue(num);
    }

    setDisabled(true);
    setValue(Math.ceil(Number(inputValue.slice(0, 16))));
  };

  const keyPress = (e: any) => {
    if (disabled && e.charCode === 13) {
      nextPage();
    }
  };

  return (
    <div style={{ marginTop: 16 }}>
      <FormItem className="InputId__FormItem" top="Перевод">
        <Input
          id="InputId__input"
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
          placeholder="ID пользователя"
          value={value}
        />
      </FormItem>
    </div>
  );
};

export default InputId;
