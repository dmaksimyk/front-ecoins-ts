import { Icon28GiftOutline } from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

const BonusIcon = () => {
  return (
    <Icon28GiftOutline
      className="gift-per-watch-video"
      onClick={() => {
        (bridge as any).send("VKWebAppShowNativeAds", {
          ad_format: "reward"
        })
          .then((data: any) => console.log(data))
          .catch((error: any) => console.log(error));
      }}
    />
  )
}

export default BonusIcon;