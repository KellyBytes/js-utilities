// toLocaleString + toFixed(2)
// separate by 3 digits and 2 decimals

export function digitSeparator(num) {
  if (num === null || num === undefined) return '-';
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
}
