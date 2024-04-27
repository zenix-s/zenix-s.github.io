export function removeTrailingSlash(pathname: string) {
  const matchTrailingSlash = /\w+\/$/;
  if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1);
  return pathname;
}

export function dateRange(startDate: string, endDate: string | null): string {
	if (!endDate) return startDate + ' - Present';
	return `${startDate} - ${endDate}`;
}
