import { ModalPage, ModalPageHeader } from "@vkontakte/vkui"
import { ReactNode } from "react"

type TProps = {
  id: string;
  height?: number;
  header: string;
  children: ReactNode;
}

const ModalsModalPage = ({ id, height = 200, header, children }: TProps) => {

  return (
    <ModalPage
      settlingHeight={height}
      id={id}
      header={
        <ModalPageHeader>
          {header}
        </ModalPageHeader>
      }>
      {children}
    </ModalPage>
  )
}

export default ModalsModalPage