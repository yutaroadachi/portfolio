export const truncate = (original: string, maxLength: number, suffix = "…") =>
  original.length > maxLength
    ? original.slice(0, maxLength - suffix.length) + suffix
    : original;
