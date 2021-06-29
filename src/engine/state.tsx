import { io } from "socket.io-client";
import { atom } from 'recoil';
import { ReactNode } from "react";
import { FirstLoader } from 'components';

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
// "DMTFywnJzxnZx3rVA2vUx3nLDhrPBMDZpsz2A19HChbFAwq9nZGYndaZnIz2A19HCMvFBM90AwzPy2f0Aw9UC19LBMfIBgvKptaMDMTFAxnFyxbWx3vZzxi9mcz2A19PC19MyxzVCML0zt0WjNzRx2XHBMD1ywDLpxj1jNzRx3bSyxrMB3jTpw1VyMLSzv93zwiMDMTFCMvMpw90AgvYjNzRx3rZpte2mJq5mtK3ndKMDMTFDxnLCL9Pzd00mtKXndKWntyMC2LNBJ14uZjqAtGWuuDzntzRx0nMAunbs2vhruX4BLfhvNfmEtbsDKHXtJzfANnv"

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
export const PLATFORM = atom<string | null>({ key: "my_platform", default: null })
export const POPOUT = atom<{ popout: ReactNode | null, type: "FirstLoader" | "Reconnect" | null }>({
  key: "popout", default: {
    popout: <FirstLoader />, 
    type: "FirstLoader"
  }
});
export const ACTIVE_MODAL = atom<TModals>({ key: "active_modal", default: null });
export const APP_STORY = atom<AppStory>({ key: "app_story", default: [{ activeView: "Shop", activePanel: "Shop" }], });
export const ACTIVE_VIEW_PANEL = atom<TPanelView>({
  key: "active_view_panel",
  default: {
    activeView: "Earnings",
    activePanel: 'Earnings',
  }
});

export const SYMBOLS_RUB = '₽';

// Пользователь - Информация
export const ID = atom<number>({ key: 'id', default: 1 })
export const IMG = atom<string>({ key: 'img', default: 'https://vk.com/images/camera_200.png' })
export const FIRST_LAST_NAME = atom<string | undefined>({ key: 'first_last_name', default: undefined })
export const BALANCE = atom<string | undefined>({ key: 'balance', default: undefined });
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
export const SUBSCRIBE_GROUP = atom<boolean | undefined>({ key: 'subscribe_group', default: undefined })

// Магазин - items
export const SHOP = atom<object[]>({ key: "shop", default: [] });
// export const GET_JOBS = atom<object[]>({ key: "get_jobs", default: [] });

// Магазин - интерфейс
export const SUBNAVIGATION_BAR_SELECT = atom<TSubnavigationBarSelect>({
  key: 'subnavigation_bar_select', default: {
    selected: 'businesses',
    index: 0
  }
});

export const hintsForFirstPopout = [
  "В казино легко поднять и легко проиграть деньги, не советуем там зарабатывать деньги!",
  "Заработать много - легко, просто стань бизнесменом. А акции компаний помогут тебе заработать еще больше!"
]