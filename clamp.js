export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// INFO: Force Values into Safe Ranges
// clamp(120, 0, 100); // -> 100
