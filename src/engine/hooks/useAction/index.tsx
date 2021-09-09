/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import openVkUser from './openVkUser';
import getNumbers from './getNumbers';
import SetLog from './SetLog';
import getRandomNumber from './getRandomNumber';

const useAction = () => {
  const action = {
    getRandomNumber: (min: number, max: number) => getRandomNumber(min, max),
    openVkUser: async (id: number) => openVkUser(id),
    getNumbers: async (regex: RegExp, value: any, maxNum: number) => getNumbers(regex, value, maxNum),
    setTransferLog: async (id: number, amount: number | string, type: 'SEND' | 'ME', arr: any) => SetLog(id, amount, type, arr),
  };

  return action;
};

export default useAction;
