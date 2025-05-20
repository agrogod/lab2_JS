function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

console.log("Завдання 2 ({}):", isEmpty({})); // true
console.log("Завдання 2 ({name: 'Тарас'}):", isEmpty({ name: "Тарас" })); // false