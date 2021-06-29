import { PanelHeader, PanelHeaderContent } from "@vkontakte/vkui";
import { ReactNode } from "react";

type TProps = {
  caption: string;
  status: string;
  left?: any;
  before?: boolean;
  separator?: boolean;
  aside?: ReactNode;
}

const StyledPanelHeader = ({
  caption, 
  status,
  left, 
  before = true, 
  separator = true,
  aside
}: TProps) => {
  return (
    <PanelHeader
      left={left} 
      separator={separator}>
      <PanelHeaderContent
        status={status}
        before={before}
        aside={aside}
      >
        {caption}
      </PanelHeaderContent>
    </PanelHeader>

  )
}

export default StyledPanelHeader;