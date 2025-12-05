export function debounce(func, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// INFO: Prevents over-triggering on scroll, resize, or input change events
// const handleChange = debounce((val) => searchUsers(val), 400);
