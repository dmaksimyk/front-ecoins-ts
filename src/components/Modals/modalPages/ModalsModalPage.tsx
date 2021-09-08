import { ModalPage, ModalPageHeader } from "@vkontakte/vkui";
import { ReactNode } from "react";

const ModalsModalPage: React.FC<{
  id: string;
  height?: number;
  header: string;
  children: ReactNode;
}> = ({ id, height = 200, header, children }) => {
  return (
    <ModalPage
      settlingHeight={height}
      id={id}
      header={<ModalPageHeader>{header}</ModalPageHeader>}
    >
      {children}
    </ModalPage>
  );
};

export default ModalsModalPage;
