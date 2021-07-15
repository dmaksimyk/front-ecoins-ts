import { RichCell, Avatar } from "@vkontakte/vkui";
import { Icon20MoneyTransferOutline } from "@vkontakte/icons";
import { SYMBOLS_RUB } from "engine/state";

const RichCellStyled = ({
  operation,
  value,
  caption,
}: {
  operation: "SEND" | "ADD";
  value: string;
  caption: string;
}) => {
  return (
    <>
      <RichCell
        disabled={true}
        before={
          <Avatar
            style={
              operation === "SEND"
                ? { background: "var(--destructive)" }
                : { background: "var(--dynamic_green)" }
            }
            shadow={false}
            size={48}
          >
            <Icon20MoneyTransferOutline fill="var(--white)" />
          </Avatar>
        }
        caption={`${operation === "SEND" ? "Получатель" : "Отправитель"}: ${caption}`}
        after={`${operation === "SEND" ? "-" : "+"} ${value} ${SYMBOLS_RUB}`}
      >
        {operation === "SEND" ? 'Вы перевели' : 'Вам перевод'}
      </RichCell>
    </>
  );
};

export default RichCellStyled;
