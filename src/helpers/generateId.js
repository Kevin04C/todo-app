export const generateId = () => {
  const dateRandom = Date.now().toString(36);
  const numberRandom = (Math.random() * 100).toString(36).slice(3);

  return dateRandom + numberRandom;
};
