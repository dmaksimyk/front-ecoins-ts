import openVkUser from "./openVkUser";

const useAction = () => {
  const action = {
    openVkUser: async (id: number) => openVkUser(id),
  };

  return action;
};

export default useAction;
