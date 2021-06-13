import { io } from "socket.io-client";
import { AppStory, TPanelView } from 'engine/types';
import { atom } from 'recoil';
import { ReactNode } from "react";

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

//Глобальные переменные
export const TOKEN = atom({ key: "token", default: token });
export const BLOCKED = atom<boolean>({ key: "blocked", default: false });
export const DONUT = atom<boolean>({ key: "donut", default: false });
export const ONLINE_USER = atom<string>({ key: "online_user", default: '0' });
export const POPOUT = atom<ReactNode | undefined>({ key: "popout", default: undefined });
export const APP_STORY = atom<AppStory>({ key: "app_story", default: [{ activeView: "Home", activePanel: "Home" }], });
export const ACTIVE_VIEW_PANEL = atom<TPanelView>({
  key: "active_view_panel",
  default: {
    activeView: "Home",
    activePanel: 'Home',
  }
});