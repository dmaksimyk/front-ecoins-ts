import { atom } from "recoil";
import { ReactNode } from "react";

import {
  TAppSector,
} from "engine/types";

import { activeView, defaultActive } from "engine/state";
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
export const PLATFORM = atom<string | null>({
  key: "my_platform",
  default: null,
});