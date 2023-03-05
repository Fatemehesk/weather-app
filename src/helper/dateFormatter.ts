export const dateFormatterFunc = (date: number) => {
  const date_Formatter = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
  }).format(date);
  return date_Formatter;
};
