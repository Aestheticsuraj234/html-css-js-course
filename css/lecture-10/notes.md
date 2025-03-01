# **Lecture 10: Styling Text and Fonts** 🎨

## **1. Font Properties**
CSS provides various properties to style fonts and text, making content more readable and visually appealing.

### **a) `font-family`**
- Defines the typeface of the text.
- Always specify multiple font options (fallback fonts) in case the primary font is unavailable.
- Syntax:
  ```css
  p {
    font-family: 'Arial', sans-serif;
  }
  ```
- Example:
  ```html
  <p style="font-family: 'Times New Roman', serif;">This is a sample text.</p>
  ```

### **b) `font-size`**
- Sets the size of the text.
- Can be defined in `px`, `em`, `rem`, `%`, or `vw/vh`.
- Syntax:
  ```css
  h1 {
    font-size: 32px;
  }
  ```
- Example:
  ```html
  <h1 style="font-size: 24px;">Heading Example</h1>
  ```

### **c) `font-weight`**
- Determines the thickness (boldness) of the text.
- Common values: `normal`, `bold`, `lighter`, `bolder`, or numeric values (`100` to `900`).
- Syntax:
  ```css
  p {
    font-weight: bold;
  }
  ```
- Example:
  ```html
  <p style="font-weight: 600;">Semi-bold text example</p>
  ```

### **d) `line-height`**
- Defines the space between lines of text.
- Can be a number, unit (px, em), or percentage.
- Syntax:
  ```css
  p {
    line-height: 1.5;
  }
  ```
- Example:
  ```html
  <p style="line-height: 2;">This text has increased line height.</p>
  ```

## **2. Text Alignment and Decoration**

### **a) `text-align`**
- Aligns text within an element.
- Values: `left`, `right`, `center`, `justify`.
- Syntax:
  ```css
  p {
    text-align: center;
  }
  ```
- Example:
  ```html
  <p style="text-align: justify;">This text is justified.</p>
  ```

### **b) `text-decoration`**
- Adds or removes decoration from text.
- Values: `underline`, `overline`, `line-through`, `none`.
- Syntax:
  ```css
  a {
    text-decoration: none;
  }
  ```
- Example:
  ```html
  <a href="#" style="text-decoration: underline;">Underlined Link</a>
  ```

## **3. Web Fonts (Google Fonts, etc.)**
- Web fonts allow you to use custom fonts hosted online.
- Example using **Google Fonts**:
  ```html
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Poppins', sans-serif;
      }
    </style>
  </head>
  <body>
    <p>This text is using the Poppins font.</p>
  </body>
  ```

### **Custom Font via `@font-face`**
- If a font file is available, you can include it using `@font-face`.
- Example:
  ```css
  @font-face {
    font-family: 'MyCustomFont';
    src: url('fonts/custom-font.woff2') format('woff2');
  }
  body {
    font-family: 'MyCustomFont', sans-serif;
  }
  ```

## **Conclusion**
- `font-family` controls the typeface.
- `font-size` adjusts text size.
- `font-weight` changes boldness.
- `line-height` improves readability.
- `text-align` manages alignment.
- `text-decoration` modifies underlines, strikethroughs, etc.
- Web fonts enable unique typography using Google Fonts or `@font-face`.



