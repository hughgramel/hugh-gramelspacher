# Blog Guide

This guide explains how to add new blog posts to the website.

## File Structure

```
public/
├── blogs.json          # Blog data (add entries here)
└── blog/
    └── photos/         # Blog header images
```

## Adding a New Blog Post

### 1. Add your header image

Place your header image in `public/blog/photos/`. Recommended dimensions: 1200x630px (16:9 ratio).

### 2. Add an entry to blogs.json

Open `public/blogs.json` and add a new entry to the `blogs` array:

```json
{
  "slug": "my-blog-post",
  "title": "My Blog Post Title",
  "date": "2025-01-15",
  "image": "my-image.jpg",
  "content": "Your markdown content here..."
}
```

## Blog Entry Fields

| Field | Required | Description |
|-------|----------|-------------|
| `slug` | Yes | URL-friendly identifier (e.g., `my-first-post`). Used in the URL: `/blog/my-first-post` |
| `title` | Yes | The title displayed on the blog |
| `date` | Yes | Publication date in `YYYY-MM-DD` format |
| `image` | Yes | Filename of the header image in `public/blog/photos/` |
| `content` | Yes | The blog content in Markdown format |

## Markdown Formatting

The `content` field supports full Markdown:

### Line Breaks

Use `\n\n` for paragraph breaks:
```json
"content": "First paragraph.\n\nSecond paragraph."
```

### Headers

```json
"content": "## Section Header\n\nParagraph text.\n\n### Subsection"
```

### Lists

```json
"content": "## My List\n\n- Item one\n- Item two\n- Item three\n\n## Numbered List\n\n1. First\n2. Second\n3. Third"
```

### Bold and Italic

```json
"content": "This is **bold** and this is *italic*."
```

### Links

```json
"content": "Check out [my project](https://example.com)."
```

### Code

Inline code:
```json
"content": "Use the `console.log()` function."
```

Code blocks:
```json
"content": "```javascript\nconst x = 1;\nconsole.log(x);\n```"
```

## Example Full Entry

```json
{
  "slug": "learning-rust-2025",
  "title": "My Journey Learning Rust in 2025",
  "date": "2025-01-15",
  "image": "rust-journey.jpg",
  "content": "I've been learning Rust for the past month and wanted to share my experience.\n\n## Why Rust?\n\nI chose Rust because:\n\n- **Memory safety** without garbage collection\n- **Great tooling** with cargo and rust-analyzer\n- **Growing ecosystem** for web and systems programming\n\n## My First Project\n\nI built a simple CLI tool that converts markdown to HTML.\n\n```rust\nfn main() {\n    println!(\"Hello, Rust!\");\n}\n```\n\n## What's Next\n\n1. Build a web server with Actix\n2. Contribute to an open source project\n3. Learn async Rust"
}
```
