import { io } from "socket.io-client";
import { atom } from 'recoil';
import { ReactNode } from "react";
import { CustomLoader } from 'components';

import { 
  AppStory, 
  TPanelView, 
  TTransfer,
  TBusiness,
  TJob,
  TModals,
  TSubnavigationBarSelect
} from 'engine/types';

import 'moment/locale/ru'
import moment from 'moment'
moment.locale('ru');

const url = new URL(window.location.href);
const token = Buffer.from(url.search.slice(1)).toString('base64').replace(/[a-z]/gi, char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase());

export const CLIENT = atom({
  key: "client", default: io("ws://localhost:16888", {
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
  })
});

// Глобальные переменные
export const TOKEN = atom({ key: "token", default: token });
export const PLATFORM = atom<string | null>({key: "my_platform", default: null })
export const POPOUT = atom<ReactNode | null>({ key: "popout", default: <CustomLoader /> });
export const ACTIVE_MODAL = atom<TModals>({ key: "active_modal", default: null });
export const APP_STORY = atom<AppStory>({ key: "app_story", default: [{ activeView: "Home", activePanel: "Home" }], });
export const ACTIVE_VIEW_PANEL = atom<TPanelView>({
  key: "active_view_panel",
  default: {
    activeView: "Home",
    activePanel: 'Home',
  }
});

export const SYMBOLS_RUB = '₽';

// Пользователь - Информация
export const ID = atom<number>({ key: 'id', default: 1 })
export const IMG = atom<string>({ key: 'img', default: 'https://vk.com/images/camera_200.png' })
export const FIRST_LAST_NAME = atom<string>({ key: 'first_last_name', default: 'No Name' })
export const BALANCE = atom<string>({ key: 'balance', default: '1 тыс.' });
export const EXP = atom<string>({ key: 'exp', default: '1 (0/200 exp)' });
export const CHECKIN = atom<string>({ key: 'checkin', default: '01 янв. 1999' });
export const TRANSFER = atom<TTransfer>({ key: 'transfer', default: { lock: false, level: 25 } })
export const MY_BUSINESS = atom<TBusiness>({ key: 'my_business', default: { name: undefined, balance: 0 } })
export const MY_JOB = atom<TJob>({ key: 'my_job', default: { name: undefined, balance: 0 } })
export const MY_RATING = atom<number>({ key: "my_rating", default: 1000 });

// Пользователь - Интерфейс
export const BLOCKED = atom<boolean>({ key: "blocked", default: false });
export const BONUS = atom<boolean>({ key: "bonus", default: false });
export const DONUT = atom<boolean>({ key: "donut", default: false });
export const ONLINE_USER = atom<string>({ key: "online_user", default: '0' });

// Магазин - items
export const GET_BUSINESSES = atom<object[]>({ key: "get_businesses", default: [] });
export const GET_JOBS = atom<object[]>({ key: "get_jobs", default: [] });

// Магазин - интерфейс
export const SUBNAVIGATION_BAR_SELECT = atom<TSubnavigationBarSelect>({ key: 'subnavigation_bar_select', default: 'businesses' });
