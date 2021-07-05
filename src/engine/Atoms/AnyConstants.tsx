import { TAppSector, THelpBridge } from "engine/types";
import bridge from "@vkontakte/vk-bridge";

export const activeView = "Home";

export const defaultActive: TAppSector = {
  activePanel: "Main",
  activePage: undefined,
  activeModal: undefined,
  activePopout: undefined,
  ignoreBack: false,
};

export const SYMBOLS_RUB = "₽";

export const hintsForFirstPopout = [
  "В казино легко поднять и проиграть деньги, не советуем зарабатывать таким способом!",
  "Чтобы не заскучать, заходите почаще в раздел: Развлечения! =)",
  "Заработать много - легко, просто стань владельцем бизнеса, а работа и акции компаний помогут заработать еще больше!",
  "Бонус зависит от вашего уровня, не забывайте его получать, вы приятно удивитесь!",
  "Играя в развлечениях можно легко прокачать уровень, ведь при игре от 5 тыс. " +
    SYMBOLS_RUB +
    " , вы, получаете exp!",
];

let timer: any = undefined;
let mapping: Map<string, string> = new Map();

export const sendToVKStorage = (key: THelpBridge, value: any) => {
  mapping.set(key, `${value || ""}`);
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    let array = [...mapping.keys()];
    bridge.send("VKWebAppStorageGet", { keys: array }).then((data) => {
      data.keys.forEach((item) => {
        let param = mapping.get(item.key);
        param !== item.value &&
          bridge.send("VKWebAppStorageSet", {
            key: item.key,
            value: `${param}`,
          });
        mapping.delete(item.key);
      });
    });
  }, 5000);
};