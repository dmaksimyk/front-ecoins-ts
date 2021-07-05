import { Gallery } from "@vkontakte/vkui";
// import { TransferId } from ".";
import TransferHome from "./panels/home";

const TransferMain = () => {
  return (
    <>
      <Gallery slideIndex={0} style={{ height: 'inherit', width: '100vh' }}>
        <TransferHome />
      </Gallery>
    </>
  );
};

export default TransferMain;
