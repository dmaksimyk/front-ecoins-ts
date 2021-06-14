export type AppStory = Story[];

export type Story = {
  [key: string]: string;
} & {
  activeView?: string;
  activePanel?: string;
  activePage?: string;
  activeModal?: string;
  activeValue?: string;
}

export type TPanelView = {
  activePanel: string;
  activeView: string;
}

export type TModals = "seeUserMore" | null;

export type START_APP = {
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