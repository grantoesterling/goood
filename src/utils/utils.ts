export const formatDate = (
  date: string,
  formatOptions?: Intl.DateTimeFormatOptions
): string => {
  const d = new Date(date ?? '')
  return Intl.DateTimeFormat(
    undefined,
    formatOptions ?? {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    }
  ).format(d)
}
