import { Header } from "@vkontakte/vkui";
const StyledVkuiHeader = ({ title }: { title: string }) => (
  <Header style={{ height: 36 }}>{title}</Header>
);
export default StyledVkuiHeader;
