import { Avatar } from "@vkontakte/vkui";
import { ReactNode } from "react";

const Image = ({ children }: { children: ReactNode }) => {
  return <Avatar style={{ color: 'var(--button_outline_foreground)' }} size={48}>{children}</Avatar>;
};

export default Image;
