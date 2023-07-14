export const formatNumber = (value) => {
  const formattedValue = Number(value).toLocaleString("en-US");
  return formattedValue;
};
