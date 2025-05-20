let salaries = {
  Jarik: 1000,
  Anna: 1600,
  Miko: 1300
};

function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log("Завдання 3 (сума зарплат):", sumSalaries(salaries)); // 3900
console.log("Завдання 3 (порожній об'єкт):", sumSalaries({})); // 0