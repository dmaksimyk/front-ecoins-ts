import { Title } from "@vkontakte/vkui";

const StyledHeader = ({children}: {children: string}) => {
  return (
    <Title
      weight="semibold"
      level="3"
      style={{
        padding: "0 16px",
      }}
    >
      {children}
    </Title>
  );
};
export default StyledHeader;
