import { Header } from "@vkontakte/vkui";
const StyledVkuiHeader: React.FC<{ title: string }> = ({ title }) => (
  <Header>{title}</Header>
);
export default StyledVkuiHeader;
