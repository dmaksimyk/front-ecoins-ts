import { Icon28GiftOutline } from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

const BonusIcon: React.FC = () => {
  return (
    <Icon28GiftOutline
      className="gift-per-watch-video"
      onClick={() => {
        bridge
          .send("VKWebAppShowNativeAds", { ad_format: "reward" })
          .then((data) => console.log(data.result))
          .catch((error) => console.log(error));
      }}
    />
  );
};

export default BonusIcon;
