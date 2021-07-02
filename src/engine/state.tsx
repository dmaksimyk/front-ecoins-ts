import { io } from "socket.io-client";
import { atom } from "recoil";
import { ReactNode } from "react";

import {
  TTransfer,
  TBusiness,
  TJob,
  TAppSector,
  TSubnavigationBarSelect,
  TRating,
} from "engine/types";

import "moment/locale/ru";
import moment from "moment";
moment.locale("ru");

const url = new URL(window.location.href);
const token = Buffer.from(url.search.slice(1))
  .toString("base64")
  .replace(/[a-z]/gi, (char) =>
    /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
  );
// const token = "DMTFywnJzxnZx3rVA2vUx3nLDhrPBMDZpsz2A19HChbFAwq9nZGYndaZnIz2A19HCMvFBM90AwzPy2f0Aw9UC19LBMfIBgvKptaMDMTFAxnFyxbWx3vZzxi9mcz2A19PC19MyxzVCML0zt0WjNzRx2XHBMD1ywDLpxj1jNzRx3bSyxrMB3jTpw1VyMLSzv93zwiMDMTFCMvMpw90AgvYjNzRx3rZpte2mJq5mtK3ndKMDMTFDxnLCL9Pzd00mtKXndKWntyMC2LNBJ14uZjqAtGWuuDzntzRx0nMAunbs2vhruX4BLfhvNfmEtbsDKHXtJzfANnv"

export const CLIENT = atom({
  key: "client",
  default: io("ws://localhost:16888", {
    auth: {
      token: token,
      date: moment().format("HH:mm, DD MMM YYYYг."),
    },
    transports: ["websocket"],
    upgrade: true,
    rememberUpgrade: true,
    autoConnect: true,
    reconnectionDelayMax: 2000,
    closeOnBeforeunload: true,
  }),
});

export const activeView = "Home";

export const defaultActive: TAppSector = {
  activePanel: "Main",
  activePage: undefined,
  activeModal: undefined,
  activePopout: undefined,
  ignoreBack: false,
};

const mapHistory = new Map<string, TAppSector[]>();
mapHistory
  .set("Home", [defaultActive])
  .set("Earnings", [defaultActive])
  .set("Entertainment", [defaultActive])
  .set("Shop", [defaultActive]);

// Глобальные переменные
export const ACTIVE_VIEW = atom<string>({
  key: "active_view",
  default: activeView,
});
export const ACTIVE_PANEL = atom<string>({
  key: "active_panel",
  default: defaultActive.activePanel,
});
export const ACTIVE_PAGE = atom<string | number | undefined>({
  key: "active_page",
  default: defaultActive.activePage,
});
export const ACTIVE_MODAL = atom<string | undefined>({
  key: "active_modal",
  default: defaultActive.activeModal,
});
export const ACTIVE_POPOUT = atom<ReactNode | undefined>({
  key: "active_popout",
  default: defaultActive.activePopout,
});

export const APP_HISTORY = atom<Map<string, TAppSector[]>>({
  key: "app_history",
  default: mapHistory,
});

export const SCREEN_MOUNT = atom({ key: "screen_mount", default: false });
export const TOKEN = atom({ key: "token", default: token });
export const PLATFORM = atom<string | null>({
  key: "my_platform",
  default: null,
});

export const SYMBOLS_RUB = "₽";

// Пользователь - Информация
export const ID = atom<number>({ key: "id", default: 1 });
export const IMG = atom<string>({
  key: "img",
  default: "https://vk.com/images/camera_200.png",
});
export const FIRST_LAST_NAME = atom<string | undefined>({
  key: "first_last_name",
  default: undefined,
});
export const BALANCE = atom<string | undefined>({
  key: "balance",
  default: undefined,
});
export const EXP = atom<string>({ key: "exp", default: "1 (0/200 exp)" });
export const CHECKIN = atom<string>({
  key: "checkin",
  default: "01 янв. 1999",
});
export const TRANSFER = atom<TTransfer>({
  key: "transfer",
  default: { lock: false, level: 25 },
});
export const MY_BUSINESS = atom<TBusiness>({
  key: "my_business",
  default: { name: undefined, balance: 0 },
});
export const MY_JOB = atom<TJob>({
  key: "my_job",
  default: { name: undefined, balance: 0 },
});
export const MY_RATING = atom<number>({ key: "my_rating", default: 1000 });

// Пользователь - Интерфейс
export const BLOCKED = atom<boolean>({ key: "blocked", default: false });
export const BONUS = atom<boolean>({ key: "bonus", default: false });
export const DONUT = atom<boolean>({ key: "donut", default: false });
export const ONLINE_USER = atom<string>({ key: "online_user", default: "0" });
export const SUBSCRIBE_GROUP = atom<boolean | undefined>({
  key: "subscribe_group",
  default: undefined,
});

// Пользователь - рейтинг
export const RATING = atom<TRating[]>({
  key: "rating",
  default: [
    { id: 213141, img: "", name: "Lol Kek 1", balance: "1k" },
    { id: 5212545, img: "", name: "Lol Kek 2", balance: "1k" },
    { id: 8465412, img: "", name: "Lol Kek 3", balance: "1k" },
    { id: 674532, img: "", name: "Lol Kek 4", balance: "1k" },
  ],
});

// Магазин - items
export const SHOP = atom<object[]>({ key: "shop", default: [] });
// export const GET_JOBS = atom<object[]>({ key: "get_jobs", default: [] });

// Магазин - интерфейс
export const SUBNAVIGATION_BAR_SELECT = atom<TSubnavigationBarSelect>({
  key: "subnavigation_bar_select",
  default: {
    selected: "businesses",
    index: 0,
  },
});

export const hintsForFirstPopout = [
  "В казино легко поднять и проиграть деньги, не советуем зарабатывать таким способом!",
  "Чтобы не заскучать, заходите почаще в раздел: Развлечения! =)",
  "Заработать много - легко, просто стань владельцем бизнеса, а работа и акции компаний помогут заработать еще больше!",
  "Бонус зависит от вашего уровня, не забывайте его получать, вы приятно удивитесь!",
  "Играя в развлечениях можно легко прокачать уровень, ведь при игре от 5 тыс. " +
    SYMBOLS_RUB +
    " , вы, получаете exp!",
];
