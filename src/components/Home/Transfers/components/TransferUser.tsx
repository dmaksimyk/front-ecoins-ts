import { Avatar, Button } from "@vkontakte/vkui";
import { ReactNode } from "react";

const TransferUser = ({ img }: { img: string | ReactNode }) => {
  const marginAndBorderRadius: any = {marginTop: 12, borderRadius: 10000, marginRight: 8}
  
  if (typeof img !== "string") {
    return (
      <Button mode="outline" style={{ ...marginAndBorderRadius }}>
        {img}
      </Button>
    );
  } else {
    return (
      <Button mode="outline" className="TransferUser-container__button" style={marginAndBorderRadius }>
        <Avatar
          style={{ objectFit: "cover" }}
          src={img as string}
        />
      </Button>
    );
  }
};
export default TransferUser;
