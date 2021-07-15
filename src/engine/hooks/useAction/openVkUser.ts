const openVkUser = (id: number) => {
  const a = document.createElement("a");
  a.href = `https://vk.com/id${id}`;
  a.click();  
}

export default openVkUser