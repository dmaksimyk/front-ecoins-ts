import { Gallery } from "@vkontakte/vkui";
import { TRANSFER_PANEL } from "engine/state";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TransferHome } from ".";

const TransferMain = () => {
  const [slide, setSlide] = useRecoilState(TRANSFER_PANEL);

  useEffect(() => {
    return setSlide(0);
  }, [setSlide]);

  return (
    <>
      <Gallery slideIndex={slide} style={{ height: "inherit", width: "100vh" }}>
        <TransferHome />
        <><p>Kek</p></>
      </Gallery>
    </>
  );
};

export default TransferMain;
