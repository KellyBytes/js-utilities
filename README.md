# Utilities

## I Copy These 10 Code Snippets Into Every Project
by [Babar saad](https://javascript.plainenglish.io/i-copy-these-10-code-snippets-into-every-project-8410176ca560)

1. `debounce` - Debounce Function
  Prevents over-triggering on scroll, resize, or input change events.
  <br />

2. `formatDate` - Format Date to Readable String
  Never Google date formatting again.
  <br />

3. `classNames` - ClassNames Utility
  Because conditional classes shouldn’t look messy.
  <br />

4. `safeJsonParse` - Safe JSON Parse
  Handles malformed localStorage or API responses without crashing.
  <br />

5. `isEmpty` - IsEmpty Object
  Better than Object.keys(obj).length === 0.
  <br />

6. `copyToClipboard` - Copy to Clipboard
  Because every app has a “copy link” button.
  <br />

7. `capitalize` - Capitalize First Letter
  Tiny detail. Big polish.
  <br />

8. `wait` - Sleep Helper
  For throttled operations, loaders, or animations.
  <br />


9. Remove Duplicates From Array
  Keep arrays clean with zero boilerplate.
  <br />

10. Download Any File from URL
  Instantly trigger file downloads.
  <br />

### Keep Them Organized

/utils
  ├── debounce.js
  ├── formatDate.js
  ├── classNames.js
  ├── jsonHelpers.js
  ├── clipboard.js
  └── etc...

Then I import as needed:

`import { debounce, formatDate, copyToClipboard } from "@/utils";`


<hr />

## 7 JavaScript Utilities I Built to Never Repeat Code Again
by [Zain Ahmad](https://javascript.plainenglish.io/7-javascript-utilities-i-built-to-never-repeat-code-again-e1c176405b47)

1. `wait(ms)` – Delay Anything Without setTimeout Hell
  I needed delays in animations, request retries, onboarding flows. This is the cleanest possible way.
  Why it’s gold: Works with async/await, chainable in sequences, and readable even in tests.
  <br />

2. `slugify(str)` – Turn Any Title into a URL
  Needed for slugs, file names, and id attributes. No dependencies required.
  Why it’s always in my toolkit: Clean output, no weird edge cases, works everywhere.
  <br />

3. `groupBy(arr, key)` – Turn Arrays into Dictionaries
  I use this to group everything — users by role, posts by tag, logs by day.
  Why it’s a must: Reduces boilerplate in sorting/filtering UIs by half.
  <br />

4. `clamp(num, min, max)` – Force Values into Safe Ranges
  I use this in sliders, zoom settings, pagination — anywhere you don’t want values escaping bounds.
  Why I love it: Removes repetitive if checks and edge-case bugs.
  <br />

5. `copyToClipboard(text)` – One-Liner Clipboard Helper
  Used this in every dashboard, onboarding tool, and data table I’ve ever built.
  Why it’s sticky: Users always want to copy something. This just works.
  <br />

6. `serializeParams(obj)` – Build Clean Query Strings
  No more ?a=1&Why I keep it around: Query string generation should be invisible, not painful.b=2&c=something logic scattered in components.
  <br />

7. `isMobile()` – Check for Mobile Without Guessing
  I’ve built dozens of UIs that tweak for mobile. This helper keeps it consistent.
  Why it helps: Great fallback check when CSS breakpoints aren’t enough.
  <br />

