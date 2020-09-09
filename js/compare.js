"use strict";

function twoNumbers() {
  let result = true;

  while (result) {
    let textForUser = "Я загадаю число от 0 до 1000. Но вы можете ввести свое максимальное число:";
    let maxNumDefault = 1000;

    let max = getNumMax(textForUser, maxNumDefault);
    let numTrue = Math.floor(Math.random() * (max + 1));
    console.log("загаданное число: " + numTrue);

    while (true) {
      let numForUser = getNum_or_null("Введите число:", "");
      if (numForUser === null) {
        alert("Было загаданно : " + numTrue + ".");
        break;
      } else if (numTrue > +numForUser) {
        alert("Больше!");
      } else if (numTrue < +numForUser) {
        alert("Меньше!");
      } else if (numTrue === +numForUser) {
        alert("Правильно!!!");
        break;
      }
    }

    result = confirm("Повторим?");
  }
}

//Дополнительные параметры для игры
function getNumMax(text, byDefault = 0) {
  while (true) {
    if (num === null) {
      break;
    }
    var num = getNum_or_null(text, byDefault); //Выполняет стандартную функцию
    if (num === 0) {
      alert("Хитрец!!! Как много вариантов от 0 до 0?");
    } else if (num < 0) {
      alert("Зачем так усложнять. Введите положительное число.");
    } else if (num > 9007199254740991) {
      alert("Я не сомневаюсь в твоей интуиции, но давай уменьшим интервал.");
    } else {
      return +num;
    }
  }
}

// Запрашивает, обрабатывает, возвращает число или null.
function getNum_or_null(text, byDefault = 0) {
  while (true) {
    var num = prompt(text, byDefault);
    if (num === null) {
      return num;
    }
    num = num.replace(/\s/g, "");
    if (num === "") {
      alert("Вы ничего не ввели");
    } else if (isNaN(Number(num))) {
      alert("Числа вводим цифрами )");
    } else {
      return +num;
    }
  }
}
