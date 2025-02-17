# Lecture 3: Forms & Accessibility

## 1. Form Elements

Forms are a crucial part of web development as they allow user input. Below are common form elements:

### **1.1 ****`<form>`**** Element**

Defines an HTML form used to collect user input.

```html
<form action="submit.php" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>
```

### **1.2 ****`<input>`**** Element**

Used to collect different types of user data. The `type` attribute defines the input field type.

```html
<input type="text" placeholder="Enter text">
<input type="email" placeholder="Enter email">
<input type="password" placeholder="Enter password">
<input type="checkbox" id="agree" name="agree">
<label for="agree">I agree to terms</label>
```

### **1.3 ****`<textarea>`**** Element**

Allows users to enter multi-line text.

```html
<textarea rows="5" cols="30" placeholder="Enter your message"></textarea>
```

### **1.4 ****`<button>`**** Element**

Defines a clickable button.

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

### **1.5 ****`<select>`**** Element**

Used for dropdown menus.

```html
<select name="country">
  <option value="us">USA</option>
  <option value="uk">UK</option>
  <option value="in">India</option>
</select>
```

---

## 2. HTML5 Form Validation

HTML5 provides built-in validation attributes to ensure correct user input.

### **2.1 Required Field**

```html
<input type="text" required>
```

### **2.2 Pattern Validation**

```html
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">
```

### **2.3 Email Validation**

```html
<input type="email" required>
```

### **2.4 Number Range**

```html
<input type="number" min="10" max="100">
```


## . Embedding Media

HTML5 allows embedding media like audio and video.

### **4.1 ****`<video>`**** Element**

```html
<video controls width="500">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### **4.2 ****`<audio>`**** Element**

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```




[text](https://www.w3schools.com/html/html_blocks.asp)