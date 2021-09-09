/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const openVkUser = (id: number) => {
  const a = document.createElement('a');
  a.href = `https://vk.com/id${id}`;
  a.click();
};

export default openVkUser;
