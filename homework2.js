// "use strict"

console.log('number' + 3 + 3); // Рядок + число + число → усе стає рядком → 'number33'

console.log(null + 3); // null перетворюється на 0 → 0 + 3 = 3

console.log(5 && "qwerty"); // 5 — істинне → повертається "qwerty"

console.log(+'40' + +'2' + "hillel"); // +'40' = 40, +'2' = 2 → 42 + "hillel" = "42hillel")

console.log('10' - 5 === 6); // '10' - 5 = 5 → 5 === 6 → false

console.log(true + false); // true = 1, false = 0 → 1 + 0 = 1

console.log('4px' - 3); // '4px' неможливо перетворити в число → NaN

console.log('4' - 3); // '4' → 4 → 4 - 3 = 1

console.log('6' + 3 ** 0); // 3 ** 0 = 1 → '6' + 1 = "61"

console.log(12 / '6'); // '6' → 6 → 12 / 6 = 2

console.log('10' + (5 === 6)); // 5 === 6 → false → '10' + false = '10false'

console.log(null == ''); // null не дорівнює порожньому рядку → false

console.log(3 ** (9 / 3)); // 9 / 3 = 3 → 3 ** 3 = 27

console.log(!!'false' == !!'true'); // обидва рядки → true → true == true → true

console.log(0 || '0' && 1); // '0' && 1 = 1 → 0 || 1 = 1

console.log((+null == false) < 1); // +null = 0 → 0 == false → true → true < 1 → false

console.log(false && true || true); // false && true = false → false || true = true

console.log(false && (false || true)); // false || true = true → false && true = false

console.log((+null == false) < 1 ** 5); // +null = 0 → 0 == false → true → 1 ** 5 = 1 → true < 1 → false