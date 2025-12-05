export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Copy failed', err);
    return false;
  }
}

// INFO: One-Liner Clipboard Helper
// await copyToClipboard('https://your.site/page');
// <button onClick={() => copyToClipboard(url)}>Copy</button>
