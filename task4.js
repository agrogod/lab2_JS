﻿function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

multiplyNumeric(menu);
console.log("Завдання 4 (результат):", menu);