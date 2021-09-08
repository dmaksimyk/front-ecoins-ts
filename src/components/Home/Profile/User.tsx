import { ReactNode } from "react";
import { Separator, Group, Div } from "@vkontakte/vkui";
import { UserPhoto, FirstAndLastName, Informations } from "./__components";

const User: React.FC<{
  container: ReactNode;
  more?: boolean;
}> = ({ container, more = true }) => {
  return (
    <Group className="user" style={{ paddingBottom: 0 }} separator="hide">
      <Div className="user__information">
        <UserPhoto />
        <FirstAndLastName />
      </Div>
      {more ? (
        <>
          {container}
          <Separator className="user__separator" />
          <Informations />
          <Separator className="user__separator" />
        </>
      ) : null}
    </Group>
  );
};

export default User;
