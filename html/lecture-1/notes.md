# Lecture 1: Introduction to HTML & Structure

## What is HTML?
HTML (HyperText Markup Language) is the standard language for creating web pages. It defines the structure of a webpage using a system of elements represented by tags.

### Key Points:
- HTML is **not a programming language**, but a **markup language**.
- It consists of **elements** enclosed in angle brackets (`<>`).
- It works alongside **CSS (for styling)** and **JavaScript (for interactivity)**.

---

## HTML Document Structure
Every HTML document follows a basic structure. Below is a simple example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph explaining HTML basics.</p>
</body>
</html>
```

### Breakdown:
- `<!DOCTYPE html>` → Defines the document as an HTML5 file.
- `<html>` → Root element of the document.
- `<head>` → Contains metadata like title, character set, and styles.
- `<title>` → Defines the page title (seen in the browser tab).
- `<body>` → Holds the visible content.

---

## Basic Text Formatting

HTML provides several tags for text formatting:

```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
```

### Explanation:
- `<h1>` to `<h6>` → Headings (h1 is the largest, h6 is the smallest).
- `<p>` → Paragraph.
- `<strong>` → Bold text.
- `<em>` → Italic text.

---

## Semantic Elements
Semantic elements provide meaning to the structure of a webpage, improving readability and SEO.

```html
<header>
    <h1>Website Title</h1>
</header>

<section>
    <article>
        <h2>Article Title</h2>
        <p>This is a sample article.</p>
    </article>
</section>

<footer>
    <p>Copyright &copy; 2025</p>
</footer>
```

### Important Semantic Elements:
- `<header>` → Represents the introductory content (e.g., logo, navigation).
- `<section>` → Groups related content.
- `<article>` → Represents independent content.
- `<footer>` → Contains footer information (e.g., copyright, links).

---

## Meta Tags and SEO Basics
Meta tags provide metadata about an HTML document. They help in SEO (Search Engine Optimization).

```html
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Learn HTML Basics">
    <meta name="keywords" content="HTML, Web Development, Coding">
    <meta name="author" content="CodeSnippet.Dev">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

### Explanation:
- `<meta charset="UTF-8">` → Defines character encoding.
- `<meta name="description">` → Describes the page for search engines.
- `<meta name="keywords">` → Keywords related to the page.
- `<meta name="author">` → Specifies the author.
- `<meta name="viewport">` → Ensures mobile responsiveness.

---

### Conclusion
- HTML is the **foundation of web development**.
- Proper structure and semantic elements **improve readability and SEO**.
- **Meta tags** help optimize webpages for search engines.

