
# **Operators in JavaScript**

Operators in JavaScript are symbols that perform operations on operands (values or variables). JavaScript has several types of operators:

## **1. Arithmetic Operators**
These operators perform mathematical operations.

| Operator | Description | Example |
|----------|------------|---------|
| `+` | Addition | `5 + 3 // 8` |
| `-` | Subtraction | `10 - 4 // 6` |
| `*` | Multiplication | `6 * 2 // 12` |
| `/` | Division | `9 / 3 // 3` |
| `%` | Modulus (Remainder) | `10 % 3 // 1` |
| `**` | Exponentiation | `2 ** 3 // 8` |
| `++` | Increment | `let x = 5; x++; // 6` |
| `--` | Decrement | `let y = 5; y--; // 4` |

### **Example:**
```javascript
let a = 10;
let b = 3;
console.log(a + b);  // Output: 13
console.log(a % b);  // Output: 1
```

---

## **2. Assignment Operators**
Used to assign values to variables.

| Operator | Description | Example |
|----------|------------|---------|
| `=` | Assigns value | `x = 10` |
| `+=` | Adds & assigns | `x += 5  // x = x + 5` |
| `-=` | Subtracts & assigns | `x -= 3  // x = x - 3` |
| `*=` | Multiplies & assigns | `x *= 2  // x = x * 2` |
| `/=` | Divides & assigns | `x /= 2  // x = x / 2` |
| `%=` | Modulus & assigns | `x %= 3  // x = x % 3` |
| `**=` | Exponentiation & assigns | `x **= 2  // x = x ** 2` |

### **Example:**
```javascript
let x = 5;
x += 3;  // x = x + 3
console.log(x);  // Output: 8
```

---

## **3. Comparison Operators**
Used to compare two values.

| Operator | Description | Example |
|----------|------------|---------|
| `==` | Equal to | `5 == "5" // true` |
| `===` | Strict equal to (checks type) | `5 === "5" // false` |
| `!=` | Not equal | `10 != 5  // true` |
| `!==` | Strict not equal | `10 !== "10" // true` |
| `>` | Greater than | `7 > 3 // true` |
| `<` | Less than | `3 < 7 // true` |
| `>=` | Greater than or equal to | `8 >= 8 // true` |
| `<=` | Less than or equal to | `6 <= 8 // true` |

### **Example:**
```javascript
let num1 = 10;
let num2 = "10";
console.log(num1 == num2);  // Output: true (only value is checked)
console.log(num1 === num2); // Output: false (value & type are checked)
```

---

## **4. Logical Operators**
Used to combine multiple conditions.

| Operator | Description | Example |
|----------|------------|---------|
| `&&` | Logical AND | `(true && false) // false` |
| `||` | Logical OR | `(true || false) // true` |
| `!` | Logical NOT | `!true // false` |

### **Example:**
```javascript
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}
```
**Output:** `"You can vote."`

---


## **5. Ternary Operator (`? :`)**
A shorthand for `if-else` statements.

### **Syntax:**
```javascript
condition ? expression_if_true : expression_if_false;
```

### **Example:**
```javascript
let score = 85;
let result = (score >= 50) ? "Pass" : "Fail";
console.log(result);  // Output: "Pass"
```

---

## **7. Type Operators**
Used to check the type of a variable.

| Operator | Description | Example |
|----------|------------|---------|
| `typeof` | Returns type | `typeof "hello" // "string"` |
| `instanceof` | Checks instance of object | `arr instanceof Array // true` |

### **Example:**
```javascript
console.log(typeof 42);  // Output: "number"
console.log(typeof true); // Output: "boolean"
```




## **Conclusion**
JavaScript operators are essential for performing calculations, comparisons, and logical operations. Understanding them helps in writing efficient and concise code.
? 😊