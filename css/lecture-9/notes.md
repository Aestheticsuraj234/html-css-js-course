# **📌 CSS Units, Colors, and Background Properties (Detailed Notes)**  

## **1️⃣ CSS Units**  
CSS units define the size of elements and their properties (e.g., width, height, padding, margin, font-size). They are categorized into **absolute** and **relative** units.  

### **🔹 Absolute Units**  
These units have a fixed size and do not change based on the screen or parent element.  

| Unit | Description |
|------|------------|
| `px` | Pixels (most commonly used) |
| `pt` | Points (used in print media, 1pt = 1/72 inch) |
| `cm` | Centimeters |
| `mm` | Millimeters |
| `in` | Inches |
| `pc` | Picas (1pc = 12pt) |

🔹 **Example of Absolute Units**:
```css
.box {
  width: 200px;   /* Fixed width, does not change */
  height: 100px;
  font-size: 16pt;
  background-color: lightblue;
}
```

---

### **🔹 Relative Units**  
These units are flexible and depend on the parent element or viewport.

| Unit | Description |
|------|------------|
| `em` | Relative to the font-size of the parent element |
| `rem` | Relative to the root (`<html>`) font-size |
| `%` | Relative to the parent element's size |
| `vw` | Viewport width (1vw = 1% of the viewport width) |
| `vh` | Viewport height (1vh = 1% of the viewport height) |
| `vmin` | The smaller of `vw` or `vh` |
| `vmax` | The larger of `vw` or `vh` |

🔹 **Example of Relative Units**:
```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;  /* 1.5 * 20px = 30px */
  width: 50%;        /* 50% of the parent element */
  height: 10vh;      /* 10% of viewport height */
  background-color: coral;
}
```

💡 **Best Practice**:  
- Use `rem` for font sizes to maintain consistency across the document.  
- Use `em` for spacing and padding if you want scaling based on the parent element.  
- Use `vh`/`vw` for full-screen layouts.

---

## **2️⃣ CSS Colors**  
CSS provides multiple ways to define colors:

### **🔹 Named Colors**  
CSS supports 140+ predefined color names.  
```css
h1 {
  color: crimson;
}
```

---

### **🔹 HEX (Hexadecimal Notation)**  
A 6-digit (#RRGGBB) or 3-digit (#RGB) notation representing **Red, Green, and Blue**.  
- Example:  
  - `#FF0000` → Red  
  - `#00FF00` → Green  
  - `#0000FF` → Blue  

```css
h1 {
  color: #ff5733; /* Orange-Red color */
}
```

💡 **Shortcut:**  
- `#FFF` is the same as `#FFFFFF`  
- `#000` is the same as `#000000`  

---

### **🔹 RGB (Red, Green, Blue)**  
Each color value ranges from `0` to `255`.  

```css
h1 {
  color: rgb(255, 87, 51); /* Same as #ff5733 */
}
```

---

### **🔹 RGBA (RGB + Alpha Transparency)**  
The alpha (`a`) value ranges from `0` (fully transparent) to `1` (fully opaque).  

```css
h1 {
  color: rgba(255, 87, 51, 0.5); /* 50% opacity */
}
```

---

### **🔹 HSL (Hue, Saturation, Lightness)**  
- **Hue (H):** 0 to 360 degrees (0 = red, 120 = green, 240 = blue)  
- **Saturation (S):** 0% (gray) to 100% (full color)  
- **Lightness (L):** 0% (black) to 100% (white)  

```css
h1 {
  color: hsl(11, 100%, 64%); /* Similar to #ff5733 */
}
```

💡 **Best Practice**:  
- **Use HEX** when you need a fixed color.  
- **Use RGBA** when you need transparency.  
- **Use HSL** for better control over color adjustments.

---

## **3️⃣ Background Properties**  
Background properties control the appearance of the background of an element.

### **🔹 `background-color`**  
Sets the background color of an element.  
```css
div {
  background-color: lightblue;
}
```

---

### **🔹 `background-image`**  
Sets an image as the background.  
```css
div {
  background-image: url('image.jpg');
}
```

🔹 **Gradient as Background Image**:
```css
div {
  background-image: linear-gradient(to right, red, blue);
}
```

---

### **🔹 `background-size`**  
Controls how the background image is scaled.  

| Value | Description |
|-------|------------|
| `auto` | Default (image keeps its original size) |
| `cover` | Scales the image to cover the entire element |
| `contain` | Scales the image to fit inside the element without cutting |

```css
div {
  background-image: url('image.jpg');
  background-size: cover;
}
```

---

### **🔹 `background-position`**  
Sets the starting position of the background image.

| Value | Description |
|-------|------------|
| `left top` | Aligns to the top-left |
| `center center` | Centers the image |
| `right bottom` | Aligns to the bottom-right |
| `50% 50%` | Centered using percentage |

```css
div {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}
```

---

### **🔹 `background-repeat`**  
Defines whether the background image repeats.

| Value | Description |
|-------|------------|
| `repeat` | Default (repeats both horizontally & vertically) |
| `repeat-x` | Repeats only horizontally |
| `repeat-y` | Repeats only vertically |
| `no-repeat` | Does not repeat |

```css
div {
  background-image: url('pattern.png');
  background-repeat: no-repeat;
}
```

---

### **🔹 `background-attachment`**  
Controls whether the background scrolls with the page.

| Value | Description |
|-------|------------|
| `scroll` | Default (background scrolls with content) |
| `fixed` | Background stays fixed while scrolling |
| `local` | Scrolls with the element's content |

```css
div {
  background-image: url('image.jpg');
  background-attachment: fixed;
}
```

---

### **🔹 `background-blend-mode`**  
Defines how the background image blends with the background color.

| Value | Description |
|-------|------------|
| `multiply` | Multiplies color with background |
| `screen` | Brightens the background |
| `overlay` | Overlay effect |
| `darken` | Darkens the background |

```css
div {
  background-color: lightblue;
  background-image: url('image.jpg');
  background-blend-mode: multiply;
}
```

---

### **Final Example: All Background Properties Combined**
```css
div {
  background: url('image.jpg') no-repeat center/cover fixed;
  background-color: rgba(0, 0, 0, 0.5);
}
```
