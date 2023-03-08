export const dateFormatterFunc = (date: number) => {
  const date_Formatter = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
  }).format(date);
  return date_Formatter;
};
