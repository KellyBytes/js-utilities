export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// INFO: Turn Any Title into a URL
// Usage
// slugify('This is a Blog Title!'); // -> "this-is-a-blog-title"
