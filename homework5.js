"use strict";

var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

services.price = function() {
  var sum = 0;
  for (var name in services) {
    if (name != "price" && name != "minPrice" && name != "maxPrice") {
      var price = services[name].replace("грн", "").trim();
      sum = sum + Number(price);
    }
  }
  return sum;
};

services.minPrice = function() {
  var min = Number(services["стрижка"].replace("грн", "").trim());
  for (var name in services) {
    if (name != "price" && name != "minPrice" && name != "maxPrice") {
      var price = Number(services[name].replace("грн", "").trim());
      if (price < min) {
        min = price;
      }
    }
  }
  return min;
};

services.maxPrice = function() {
  var max = Number(services["стрижка"].replace("грн", "").trim());
  for (var name in services) {
    if (name != "price" && name != "minPrice" && name != "maxPrice") {
      var price = Number(services[name].replace("грн", "").trim());
      if (price > max) {
        max = price;
      }
    }
  }
  return max;
};

console.log("Загальна вартість:", services.price());  // 440
console.log("Мінімальна ціна:", services.minPrice());  // 60
console.log("Максимальна ціна:", services.maxPrice()); // 200