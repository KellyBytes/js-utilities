export function formatDate(dateStr, locale = 'en-US') {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// INFO: Format date to readable string. Showing Apr 22, 2025 in dashboards or receipts
