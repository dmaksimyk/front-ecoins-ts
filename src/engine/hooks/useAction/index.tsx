import openVkUser from "./openVkUser";
import getNumbers from "./getNumbers";
import SetLog from "./SetLog";

const useAction = () => {
  const action = {
    openVkUser: async (id: number) => openVkUser(id),
    getNumbers: async (regex: RegExp, value: any, maxNum: number) => getNumbers(regex, value, maxNum),
    setTransferLog: async (id: number, amount: number | string, type: "SEND" | "ME", arr: any) => SetLog(id, amount, type, arr),
  };

  return action;
};

export default useAction;
