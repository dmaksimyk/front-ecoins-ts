/* eslint-disable max-len */
import { sendToVKStorage } from 'engine/state';
import { atom } from 'recoil';

export const RATING_HELP = atom<'false' | 'true'>({ key: 'rating_help', default: 'false', effects_UNSTABLE: [({ onSet }) => onSet((string) => sendToVKStorage('settingRatingHelp', string))] });
export const TRANSFER_HELP = atom<'false' | 'true'>({ key: 'transfer_help', default: 'false', effects_UNSTABLE: [({ onSet }) => onSet((string) => sendToVKStorage('settingTransferHelp', string))] });
