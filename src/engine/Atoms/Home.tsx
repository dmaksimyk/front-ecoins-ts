import { atom } from "recoil";
import { TTransfer, TBusiness, TJob, TRating } from "engine/types";

// Интерфейс
export const BLOCKED = atom<boolean>({ key: "blocked", default: false });
export const BONUS = atom<boolean>({ key: "bonus", default: false });
export const DONUT = atom<boolean>({ key: "donut", default: false });
export const ONLINE_USER = atom<string>({ key: "online_user", default: "0" });
export const SUBSCRIBE_GROUP = atom<boolean | undefined>({
  key: "subscribe_group",
  default: undefined,
});

// Пользователь
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

// Рейтинг
export const RATING = atom<TRating[]>({
  key: "rating",
  default: [
    { id: 213141, img: "", name: "Lol Kek 1", balance: "1k" },
    { id: 5212545, img: "", name: "Lol Kek 2", balance: "1k" },
    { id: 8465412, img: "", name: "Lol Kek 3", balance: "1k" },
    { id: 674532, img: "", name: "Lol Kek 4", balance: "1k" },
  ],
});

// Переводы
export const TRANSFERS_FAST_TRANSFER = atom<any[]>({
  key: "transfers_fast_transfer",
  default: [
    {
      id: 123241,
      img: "https://sun9-49.userapi.com/impg/CsogpVhyUBJVJ156fKSdM1NDKRoGuGl6ZJ87Qg/B3sgtu-yUYA.jpg?size=607x1080&quality=96&sign=9e9992d6e21d5984fdb5205ab9889c5f&type=album",
    },
    {
      id: 5646532,
      img: "https://sun9-49.userapi.com/impg/CsogpVhyUBJVJ156fKSdM1NDKRoGuGl6ZJ87Qg/B3sgtu-yUYA.jpg?size=607x1080&quality=96&sign=9e9992d6e21d5984fdb5205ab9889c5f&type=album",
    },
  ],
});
