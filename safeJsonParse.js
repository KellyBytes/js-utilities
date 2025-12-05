export function safeJsonParse(str, fallback = {}) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

// INFO: Handles malformed localStorage or API responses without crashing
// const user = safeJsonParse(localStorage.getItem("user"));
