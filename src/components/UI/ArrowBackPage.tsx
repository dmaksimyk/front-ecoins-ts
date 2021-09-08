import { PanelHeaderBack } from "@vkontakte/vkui";
import { useNavigation } from "engine";

const ArrowBackPage: React.FC = () => {
  const history = useNavigation();

  return <PanelHeaderBack onClick={() => history.backPage()} />;
};

export default ArrowBackPage;
