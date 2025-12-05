export function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// INFO: Check for Mobile Without Guessing
// Usage
// if (isMobile()) {
//   enableTouchUI();
// }
