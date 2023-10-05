// Найти максимальное значение в массиве:
Math.max(...array);

// Найти наименьшее значение в массиве:
Math.min(...array);

// Удалить дубликаты из массива:
[...new Set(array)];

// Сгенерировать случайное число от 1 до 100:
Math.floor(Math.random() * 100) + 1;

// Проверить, является ли строка валидным числом:
!isNaN(parseFloat(string));

// Получить текущую дату и время:
new Date().toString();

// Получить текущую метку времени:
Date.now();

// Проверить, является ли переменная массивом:
Array.isArray(variable);

// Проверить, является ли переменная объектом:
typeof variable === "object";

// Проверить, является ли переменная функцией:
typeof variable === "function";

// Проверить, является ли переменная undefined:
typeof variable === "undefined";

// Проверить, является ли переменная null:
variable === null;

// Преобразовать массив в строку:
array.join(",");

// Преобразовать строку в массив:
Array.from('1234'); // ['1', '2', '3', '4'];
[...'hello']; // ['h', 'e', 'l', 'l', 'o'];
'test'.split(''); // => ['t', 'e', 's', 't'];

// Перебираем строку в цикле
for (const symbol of 'test') {
  console.log(symbol);
};

// Преобразовать объект в массив:
Object.values(object);

// Посчитать вхождения элемента в массиве:
array.filter(x => x === element).length;

// Создать новый объект с динамическим ключом и значением:
// { [key]: value }

// Проверить, является ли строка палиндромом:
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
};

function SingleCharacterPalindrome(str) {
  if (isPalindrome(str)) {
    return "OK";
  }

  for (let i = 0; i < str.length; i++) {
    if (isPalindrome(str.slice(0, i) + str.slice(i + 1))) {
      return "remove one";
    }
  }

  return "not possible";
};

// Получить сумму всех чисел в массиве:
array.reduce((a, b) => a + b, 0);

// Проверить, пуст ли массив:
array.length === 0;

// Создать новый массив с определенным диапазоном чисел:
Array.from({ length: n }, (_, i) => i);

// Следует исключить из списка "а" все значения, которые присутствуют в списке "Ь", сохраняя их порядок.
const arrayDiff = (a, b) => a.filter( x => !b.includes(x))

// Напишите функцию squareDigits, которая принимает число и возводит в квадрат каждый символ.
const squareDigits = (num) => {
    let result = "";

    for (const n of num.toString()) {
        result += Number(n) ** 2;
    }

    return Number(result);
};

const squareDigits2 = (num) => {
  return +num
    .toString()
    .split("")
    .map((n) => (+n) ** 2)
    .join("");
};

// Напишите функцию randomHex, которая генерирует случайное HEX-значение заданной длины.
const randomHex = (size) => {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
};

// Функция order
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
    .map((word) => word.match(/\D/g)?.join(""))
    .join(" ");
}

// Удалить лишние пробелы из строки
function strip(str) {
  return str
    .replace(/\s+/g,'') // заменить длинные пробелы одним
    .replace(/^\s/,'')  // удалить пробелы в начале строки
    .replace(/\s$/,'');  // удалить пробелы в конце строки
}

// Вернуть случайный элемент из массива
function randomElement(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Функция generatePassword
function generatePassword(length) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return new Array(length)
    .fill(null)
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');
}

// Найти счастливое целое число в массиве
var findLucky = function(arr) {
    let lucky = [-1];
    let numObj = {};
    for (const num of arr) {
        numObj[num] ? numObj[num] += 1 : numObj[num] = 1;
    }
    let nums = Object.keys(numObj);
    let frequencies = Object.values(numObj);
    for (let num in nums) {
        if (nums[num] == frequencies[num]) {
            lucky.push(frequencies[num]);
        }
    }
    if (lucky.length === 1) {
        return lucky;
    } else {
        return Math.max(...lucky);
    }
};
