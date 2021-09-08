import { PanelHeader, PanelHeaderContent } from "@vkontakte/vkui";
import { ReactNode } from "react";

const StyledPanelHeader: React.FC<{
  caption: string;
  status: string;
  left?: any;
  before?: boolean;
  separator?: boolean;
  aside?: ReactNode;
}> = ({ caption, status, left, before = true, separator = true, aside }) => {
  return (
    <PanelHeader left={left} separator={separator}>
      <PanelHeaderContent status={status} before={before} aside={aside}>
        {caption}
      </PanelHeaderContent>
    </PanelHeader>
  );
};

export default StyledPanelHeader;
