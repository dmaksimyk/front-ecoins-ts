import { 
  ReactNode 
} from "react";

import {
  Placeholder,
  Spinner,
  Text
} from "@vkontakte/vkui"

type TProps = {
  icon: ReactNode | undefined;
}

const Loader = ({ icon }: TProps) => {
  return (
    <Placeholder icon={icon || <Spinner/>}>
      <Text weight="regular">Загрузка, ожидайте...</Text>
    </Placeholder>
  )
}

export default Loader;