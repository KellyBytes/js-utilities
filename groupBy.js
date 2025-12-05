export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const val = typeof key === 'function' ? key(item) : item[key];
    acc[val] = acc[val] || [];
    acc[val].push(item);
    return acc;
  }, {});
}

// INFO: Turn Arrays into Dictionaries
// Usage
// groupBy(users, 'role');
// groupBy(posts, (p) => p.date.slice(0, 10));
