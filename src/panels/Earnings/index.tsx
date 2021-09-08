import { Panel, PanelProps } from "@vkontakte/vkui";
import { StyledPanelHeader } from 'components/UI';
import Earning from "components/Earnings";

const Job: React.FC<PanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <StyledPanelHeader caption="Заработок" status="Здесь пахнет деньгами" />
      <Earning />
    </Panel>
  );
};

export default Job;
