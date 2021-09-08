import { ReactNode } from "react";

import { Placeholder, Spinner, Text } from "@vkontakte/vkui";

const Loader: React.FC<{
  icon: ReactNode | undefined;
}> = ({ icon }) => {
  return (
    <Placeholder icon={icon || <Spinner />}>
      <Text weight="regular">Загрузка, ожидайте...</Text>
    </Placeholder>
  );
};

export default Loader;
