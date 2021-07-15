import { Icon16Add } from "@vkontakte/icons";
import { CardScroll } from "@vkontakte/vkui";
import { TRANSFERS_FAST_TRANSFER } from "engine/state";
import { useRecoilValue } from "recoil";
import { TransferUser } from ".";

const FastTransfer = () => {
  const users = useRecoilValue(TRANSFERS_FAST_TRANSFER);
  return (
    <>
      <CardScroll style={{ marginTop: 10 }}>
        <TransferUser img={<Icon16Add />} />
        {users.map((user, index) => (
          <TransferUser key={user.img + index} img={user.img} />
        ))}
      </CardScroll>
    </>
  );
};

export default FastTransfer;
