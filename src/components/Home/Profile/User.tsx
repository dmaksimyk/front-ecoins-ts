import { ReactNode } from "react";

import { Separator, Group, Div } from "@vkontakte/vkui";

import { Avatar, FirstAndLastName, Informations } from "./components";

type Props = {
  more?: boolean;
  container: ReactNode;
};

const User = ({ container, more = true }: Props) => {
  return (
    <Group className="user" style={{ paddingBottom: 0 }} separator="hide">
      <Div className="user-container__name-and-avatar">
        <Avatar />
        <FirstAndLastName />
      </Div>
      {more ? (
        <>
          {container}
          <Separator className="user-container__separator" />
          <Informations />
          <Separator className="user-container__separator" />
        </>
      ) : null}
    </Group>
  );
};

export default User;
