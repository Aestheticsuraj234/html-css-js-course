# Lecture 2: HTML Lists, Images, Links, and Tables

### What are Attributes in HTML?

Attributes provide **additional information** about an HTML element. They are always included inside the **opening tag** and are written as `name="value"` pairs.

#### Example:
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```
Here:
- `href="https://example.com"` → Specifies the link destination.
- `target="_blank"` → Opens the link in a **new tab**.


## Ordered, Unordered, and Definition Lists
HTML provides different types of lists to organize content.

### Ordered List (`<ol>`) - Numbered List:
```html
<ol type="1" start="3" reversed>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```
**Attributes:**
- `type` → Defines number style (`1`, `A`, `a`, `I`, `i`).
- `start` → Specifies the starting number.
- `reversed` → Reverses the order.

### Unordered List (`<ul>`) - Bullet Points:
```html
<ul type="square">
    <li>Item A</li>
    <li>Item B</li>
</ul>
```
**Attributes:**
- `type` → Defines bullet style (`disc`, `circle`, `square`).

### Definition List (`<dl>`) - Term and Description:
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
</dl>
```

---

## Adding Images
```html
<img src="image.jpg" alt="Description" width="300" height="200">
```
**Attributes:**
- `src` → Image URL.
- `alt` → Alternative text for accessibility.
- `width` & `height` → Dimensions.

### Responsive Images
```html
<img src="image.jpg" alt="Responsive Image" style="max-width:100%; height:auto;">
```

---

## Hyperlinks
### Internal Link
```html
<a href="about.html">About Us</a>
```
### External Link
```html
<a href="https://example.com" target="_blank" rel="noopener">Visit Website</a>
```
### Bookmark Link
```html
<a href="#section1">Go to Section 1</a>
```

---

## Creating Tables
```html
<table border="1" cellpadding="5" cellspacing="5">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>
```
**Attributes:**
- `border` → Table border.
- `cellpadding` → Space inside cells.
- `cellspacing` → Space between cells.

### Merging Cells
```html
<td colspan="2">Merged Cell</td>
<td rowspan="2">Vertical Merge</td>
```

This concludes **Lecture 2** on HTML Lists, Images, Links, and Tables! 🚀

[text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)