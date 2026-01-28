export const formatDateTime = dateString => {
  const date = new Date(dateString);

  // Get month
  const options = { month: 'short' };
  const month = date.toLocaleString('en-US', options, { timeZone: 'UTC' });

  // Get day
  const day = date.getUTCDate();

  // Format time in UTC 24-hour
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'UTC',
  };

  const time = date.toLocaleString('en-US', timeOptions);

  // Final formatted string
  return `${month} ${day} at ${time}`;
};

// INFO: Format date and time from 2026-01-28T21:30:00.000+00:00 (UTC 8601) to Jan 28 at 21:30
