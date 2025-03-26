# **JavaScript Strings & String Methods**

## **1. What is a String?**
A **string** in JavaScript is a sequence of characters enclosed in:
- **Single quotes (`'`)**
- **Double quotes (`"`)**
- **Backticks (`` ` ``) – Template literals**

```js
let str1 = "Hello, World!";  // Double quotes
let str2 = 'JavaScript';      // Single quotes
let str3 = `Template Literals`; // Backticks
```

---

## **2. String Properties**
- **`length`** – Returns the number of characters in a string.
  
```js
let text = "JavaScript";
console.log(text.length);  // Output: 10
```

- Strings are **immutable**, meaning their characters cannot be changed directly.

---

## **3. String Methods**

### **3.1. Accessing Characters**
- **Bracket Notation (`[]`)**
- **`.charAt(index)`**

```js
let str = "Hello";
console.log(str[1]);       // Output: 'e'
console.log(str.charAt(1)); // Output: 'e'
```

---

### **3.2. Changing Case**
- **`.toUpperCase()`** – Converts all letters to uppercase.
- **`.toLowerCase()`** – Converts all letters to lowercase.

```js
let str = "JavaScript";
console.log(str.toUpperCase()); // Output: "JAVASCRIPT"
console.log(str.toLowerCase()); // Output: "javascript"
```

---

### **3.3. Extracting Substrings**
- **`.slice(start, end)`** – Extracts a portion of a string.
- **`.substring(start, end)`** – Similar to `slice`, but does not accept negative indices.
- **`.substr(start, length)`** – Extracts part of a string based on length.

```js
let str = "JavaScript";
console.log(str.slice(0, 4));      // Output: "Java"
console.log(str.substring(0, 4));  // Output: "Java"
console.log(str.substr(0, 4));     // Output: "Java"
```

---

### **3.4. Searching for a Substring**
- **`.indexOf(substring)`** – Returns the first occurrence index.
- **`.lastIndexOf(substring)`** – Returns the last occurrence index.
- **`.includes(substring)`** – Returns `true` or `false`.
- **`.startsWith(substring)`** – Checks if a string starts with a given substring.
- **`.endsWith(substring)`** – Checks if a string ends with a given substring.

```js
let str = "Hello, world!";
console.log(str.indexOf("o"));       // Output: 4
console.log(str.lastIndexOf("o"));   // Output: 8
console.log(str.includes("world"));  // Output: true
console.log(str.startsWith("Hello")); // Output: true
console.log(str.endsWith("!"));      // Output: true
```

---

### **3.5. Modifying Strings**
- **`.trim()`** – Removes whitespace from both ends.
- **`.trimStart()`** – Removes whitespace from the start.
- **`.trimEnd()`** – Removes whitespace from the end.
- **`.replace(searchValue, replaceValue)`** – Replaces a part of a string.
- **`.replaceAll(searchValue, replaceValue)`** – Replaces all occurrences.

```js
let str = "  Hello World!  ";
console.log(str.trim());       // Output: "Hello World!"
console.log(str.trimStart());  // Output: "Hello World!  "
console.log(str.trimEnd());    // Output: "  Hello World!"

let text = "I love JavaScript!";
console.log(text.replace("love", "like")); // Output: "I like JavaScript!"
console.log(text.replaceAll("a", "@"));   // Output: "I love J@v@Script!"
```

---

### **3.6. Splitting & Joining Strings**
- **`.split(separator)`** – Converts a string into an array.
- **`.concat()`** – Joins two or more strings.

```js
let str = "Apple, Banana, Cherry";
let arr = str.split(", "); 
console.log(arr); // Output: ["Apple", "Banana", "Cherry"]

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Output: "Hello World"
```

---

### **3.7. Repeating Strings**
- **`.repeat(n)`** – Repeats a string `n` times.

```js
let str = "Ha";
console.log(str.repeat(3)); // Output: "HaHaHa"
```

---

### **3.8. String Interpolation (Template Literals)**
Template literals (`` ` ``) allow embedding variables and expressions using **`${}`**.

```js
let name = "Alice";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: "My name is Alice and I am 25 years old."
```

---

## **4. Escape Characters**
JavaScript provides escape sequences to represent special characters in strings.

| Escape Sequence | Meaning       |
|---------------|--------------|
| `\'`         | Single quote  |
| `\"`         | Double quote  |
| `\\`         | Backslash     |
| `\n`         | New line      |
| `\t`         | Tab space     |

```js
let str = "Hello \"World\"!\nNew line";
console.log(str);
```

---

## **5. Converting Other Data Types to Strings**
- **`String(value)`** – Converts a value to a string.
- **`.toString()`** – Converts a number, boolean, or object to a string.

```js
let num = 123;
console.log(String(num));  // Output: "123"
console.log(num.toString()); // Output: "123"
```

---

## **6. String Comparison**
Strings are compared **lexicographically** (dictionary order).

```js
console.log("apple" > "banana"); // Output: false (because 'a' < 'b')
console.log("Zebra" < "apple"); // Output: true
```

---

## **7. Unicode & Emojis in Strings**
JavaScript supports Unicode and emojis using escape sequences.

```js
let emoji = "\u{1F60D}";  // Unicode for 😍
console.log(emoji);  // Output: 😍
```

---

### **8. Summary Table**
| Method | Description |
|--------|-------------|
| `length` | Returns string length |
| `charAt(index)` | Returns character at index |
| `toUpperCase()` | Converts to uppercase |
| `toLowerCase()` | Converts to lowercase |
| `slice(start, end)` | Extracts part of a string |
| `indexOf(substring)` | Returns index of first occurrence |
| `lastIndexOf(substring)` | Returns index of last occurrence |
| `includes(substring)` | Checks if substring exists |
| `replace(old, new)` | Replaces first occurrence |
| `replaceAll(old, new)` | Replaces all occurrences |
| `split(separator)` | Splits string into an array |
| `concat(string)` | Joins strings |
| `repeat(n)` | Repeats string `n` times |
| `trim()` | Removes whitespace from both ends |
| `startsWith(substring)` | Checks if string starts with substring |
| `endsWith(substring)` | Checks if string ends with substring |

