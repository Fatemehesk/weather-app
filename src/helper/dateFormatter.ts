export const dateFormatterFunc = (date: any) => {
  const date_Formatter = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
  });
  const dailyDate = date_Formatter.format(date);
  return dailyDate;
};
