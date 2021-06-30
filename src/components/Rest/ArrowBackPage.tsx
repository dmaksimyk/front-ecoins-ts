import { PanelHeaderBack } from "@vkontakte/vkui";
import { useNavigation } from "engine";

const ArrowBackPage = () => {
  const history = useNavigation() 

  return (
    <PanelHeaderBack onClick={() => history.backPage()} />
  )
}

export default ArrowBackPage;