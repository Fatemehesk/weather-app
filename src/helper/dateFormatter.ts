export const dateFormatterFunc = (date: any) => {
  const dateTime = new Date(date * 1000);
  const dateString = dateTime.toLocaleString("en-US", { weekday: "short" });
  return dateString;
};
export const dateFormatterToHourFunc = (date: any) => {
  const dateTime = new Date(date * 1000);
  const dateString = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    second: undefined,
    minute: undefined,
  });

  return dateString;
};
