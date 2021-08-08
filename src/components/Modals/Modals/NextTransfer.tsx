import { ModalPage, ModalPageHeader } from "@vkontakte/vkui";
import { Transfer } from "components/Home/Transfers";

type TProps = {
  id: string;
  height?: number;
  header: string;
};

const NextTransfer = ({ id, height = 200, header }: TProps) => {
  return (
    <ModalPage
      settlingHeight={height}
      id={id}
      header={<ModalPageHeader>{header}</ModalPageHeader>}
    >
      <Transfer />
    </ModalPage>
  );
};

export default NextTransfer;
