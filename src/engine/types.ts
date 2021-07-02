import { ReactNode } from "react";


export type TAppHistory = {
  [activeView: string]: TAppSector[];
}

export type TAppSector = {
  activePanel: string;
  activePage?: string | number;
  activeModal?: string;
  activePopout?: ReactNode;
  ignoreBack?: boolean;
}

export type TAppHistoryOptions = {
  [key: string]: any;
} & {
  activeView?: string;
  activePanel?: string;
  activePage?: string | number;
  activeModal?: string;
  activePopout?: ReactNode;
}

export type TSubnavigationBarSelect = {
  selected: "businesses" | "promotions" | "home" | "cars" | "clothes" | "smartphones" | "market";
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | number;
}

export type START_APP = {
  subscribe: boolean,
  checkin: string,
  online: string,
  balance: string,
  exp: string,
  bonus: boolean,
  donut: boolean,
  blocked: boolean,
  rating: number,
  transfer: TTransfer,
  business: TBusiness,
  job: TJob
}

export type TTransfer = {
  lock: boolean;
  level: number;
}

export type TBusiness = {
  name: string | undefined;
  balance: number;
}

export type TRating = {
  id: number;
  img: string;
  name: string;
  balance: string;
}

export type TJob = TBusiness;