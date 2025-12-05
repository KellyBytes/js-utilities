export function serializeParams(params) {
  return Object.entries(params)
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    )
    .join('&');
}

// INFO: Build Clean Query Strings
// Usage
// const url = '/search?' + serializeParams({ q: 'js tricks', page: 2 });
