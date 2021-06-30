import { ModalPage, ModalPageHeader } from "@vkontakte/vkui"
import { useNavigation } from "engine"
import { ReactNode } from "react"

type TProps = {
  id: string;
  height?: number;
  header: string;
  children: ReactNode;
}

const ModalsModalPage = ({ id, height = 200, header, children }: TProps) => {
  const history = useNavigation()

  return (
    <ModalPage
      onClose={() => history.backPage()}
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