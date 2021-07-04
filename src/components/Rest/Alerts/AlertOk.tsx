import { Alert } from "@vkontakte/vkui";
import { useNavigation } from "engine";

const AlertOk = ({ caption }: { caption: string }) => {
  const nav = useNavigation()
  return (
    <Alert
      actions={[
        {
          title: "Ок",
          autoclose: true,
          mode: "default",
        },
      ]}
      onClose={() => nav.backPage()}
    >
      {caption}
    </Alert>
  );
};

export default AlertOk;
