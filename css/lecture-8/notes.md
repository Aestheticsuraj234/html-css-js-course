

## 📌 **CSS Positioning Types**
CSS provides several positioning types that control how elements are placed on the page.

### **1️⃣ `static` (Default Positioning)**✅
- This is the default position for all elements.
- The element follows the normal document flow.
- `top`, `left`, `right`, `bottom`, and `z-index` **do not affect** `static` elements.

🔹 **Example:**
```css
.box {
  position: static; /* Default */
  width: 100px;
  height: 100px;
  background: lightblue;
}
```
---

### **2️⃣ `relative` (Relative to Itself)**✅
- The element remains in the normal document flow.
- You can move it using `top`, `left`, `right`, or `bottom` **relative to its original position**.

🔹 **Example:**
```css
.box {
  position: relative;
  top: 20px; /* Moves down by 20px */
  left: 30px; /* Moves right by 30px */
  width: 100px;
  height: 100px;
  background: lightcoral;
}
```
🔹 **Result:** The box shifts from its original place without affecting other elements.

---

### **3️⃣ `absolute` (Relative to Nearest Positioned Ancestor)**✅
- The element is **removed from normal document flow**.
- It is positioned **relative to the nearest ancestor** with `position: relative`, `absolute`, or `fixed`.
- If no such ancestor exists, it is positioned **relative to the `body`**.

🔹 **Example:**
```css
.container {
  position: relative; /* Parent becomes reference */
  width: 300px;
  height: 300px;
  background: lightgray;
}

.box {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background: lightsalmon;
}
```
🔹 **Result:** The `.box` is positioned 50px from the top and 50px from the left of `.container`.

---

### **4️⃣ `fixed` (Relative to the Viewport)**
- The element is **removed from normal document flow**.
- It is **always positioned relative to the viewport**, meaning it stays in the same place even when scrolling.

🔹 **Example (Sticky Header or Footer):**
```css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: navy;
  color: white;
  text-align: center;
  line-height: 50px;
}
```
🔹 **Result:** The header remains fixed at the top of the viewport.

---

## 📌 **Using `z-index` for Stacking Order**
- The `z-index` property controls the **stacking order** of elements.
- Elements with **higher `z-index` values appear above** elements with lower values.
- Only works on elements with `position: relative`, `absolute`, or `fixed` (not `static`).

🔹 **Example:**
```css
.box1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: red;
  z-index: 1;
}

.box2 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
  background: blue;
  z-index: 2; /* Higher value, appears on top */
}
```
🔹 **Result:** The blue box (`z-index: 2`) appears above the red box (`z-index: 1`).

---

## 📌 **Positioning with `top`, `left`, `right`, `bottom`**
These properties work with `relative`, `absolute`, and `fixed` positioning.

### **🔹 Example: Centering an Element using `absolute`**
```css
.parent {
  position: relative;
  width: 300px;
  height: 300px;
  background: lightgray;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: teal;
}
```
🔹 **Result:** The `.child` box is perfectly centered inside `.parent`.

---

### **Summary Table:**
| Position | Moves with `top`, `left`, `right`, `bottom`? | Affects Document Flow? | Positioned Relative To |
|----------|----------------------------------|----------------------|----------------------|
| `static` | ❌ No | ✅ Yes | Normal document flow |
| `relative` | ✅ Yes | ✅ Yes | Its original position |
| `absolute` | ✅ Yes | ❌ No | Nearest positioned ancestor (or `body`) |
| `fixed` | ✅ Yes | ❌ No | Viewport |

