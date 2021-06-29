export type AppStory = Story[];

export type Story = {
  [key: string]: string;
} & {
  type?: "VIEW" | "PANEL" | undefined;
  activeView?: string;
  activePanel?: string;
  activePage?: string;
  activeModal?: string;
  activeValue?: string;
}

export type TPanelView = {
  type?: "VIEW" | "PANEL" | undefined;
  activePanel: string;
  activeView: string;
}

export type TSubnavigationBarSelect = {
  selected: "businesses" | "promotions" | "home" | "cars" | "clothes" | "smartphones" | "market";
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | number;
}

export type TModals = "seeUserMore" | null;

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

export type TJob = TBusiness;