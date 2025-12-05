export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// INFO: Delay Anything Without setTimeout Hell
// Usage
// await wait(1000);
// console.log('Waited 1 second');
