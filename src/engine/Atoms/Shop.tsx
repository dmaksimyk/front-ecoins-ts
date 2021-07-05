import { TSubnavigationBarSelect } from "engine/types";
import { atom } from "recoil";

export const SHOP = atom<object[]>({ key: "shop", default: [] });
export const GET_JOBS = atom<object[]>({ key: "get_jobs", default: [] });

// Магазин - интерфейс
export const SUBNAVIGATION_BAR_SELECT = atom<TSubnavigationBarSelect>({
  key: "subnavigation_bar_select",
  default: {
    selected: "businesses",
    index: 0,
  },
});
