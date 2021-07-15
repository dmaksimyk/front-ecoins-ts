import { Avatar } from "components";
import Image from "./Image";
import { ReactNode } from "react";

const TransferUser = ({ img }: { img: string | ReactNode }) => {
  if (typeof img !== "string")
    return (
      <div className="TransferUser-btn__margin TransferUser-btn__active">
        <Image>{img}</Image>
      </div>
    );
  return (
    <div className="TransferUser-btn__margin TransferUser-btns__border">
      <Avatar size={48} img={img} styling={{ borderRadius: 10000 }} />
    </div>
  );
};
export default TransferUser;
