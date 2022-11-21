export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function getPrettyDate(date: Date) {
  const options = { year: "numeric", month: "short", day: "numeric" } as const;

  return date.toLocaleDateString("en-US", options);
}
