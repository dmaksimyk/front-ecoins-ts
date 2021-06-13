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