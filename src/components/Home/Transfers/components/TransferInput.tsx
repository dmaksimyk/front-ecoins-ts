import { Group, Div } from "@vkontakte/vkui";
import { StyledHeader } from "components";
import InputId from "./InputId";

const TransferInput = () => {
  return (
    <Group separator="hide" header={<StyledHeader title="Перевод" />}>
      <Div>
        <InputId />
      </Div>
    </Group>
  );
};

export default TransferInput;
