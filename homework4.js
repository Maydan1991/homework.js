"use strict";

function checkProbabilityTheory(count, min, max) {
  let even = 0, n = count;
  while (n--) even += (Math.floor(Math.random() * (max - min + 1)) + min) % 2 === 0;
  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних: ${even}`);
  console.log(`Непарних: ${count - even}`);
  console.log(`Відсоток парних: ${(even / count * 100).toFixed(2)}%`);
  console.log(`Відсоток непарних: ${((count - even) / count * 100).toFixed(2)}%`);
}

checkProbabilityTheory(10, 100, 1000);