// Variables of Task one
const input1 = document.querySelector("#input1Task1");
const input2 = document.querySelector("#input2Task1");
const input3 = document.querySelector("#input3Task1");
const parentTaskAnswerZone = document.querySelector("#parentTaskAnswerZone");
const takeAnswerBtn1 = document.querySelector("#takeAnswerBtn1");
const buttonReset1 = document.querySelector("#buttonReset1");
const taskAnswerP1 = document.querySelector("#taskAnswerP1");
const taskAnswerP2 = document.querySelector("#taskAnswerP2");
const taskAnswerP3 = document.querySelector("#taskAnswerP3");
const taskAnswerMain = document.querySelector("#taskAnswerMain");

// Variables of Task two
const input21 = document.querySelector("#input1Task2");
const taskAnswerMain2 = document.querySelector("#taskAnswerMainTask2");
const takeAnswerBtn2 = document.querySelector("#takeAnswerBtn2");
const buttonReset2 = document.querySelector("#buttonReset2");
const parentTaskAnswerZoneTask2 = document.querySelector(
  "#parentTaskAnswerZoneTask2"
);

// Variables of Task three
const takeAnswerBtn3 = document.querySelector("#takeAnswerBtn3");
const buttonReset3 = document.querySelector("#buttonReset3");
const parentTaskAnswerZoneTask3 = document.querySelector(
  "#parentTaskAnswerZoneTask3"
);
const AnswerP1Task3 = document.querySelector("#AnswerP1Task3");
const AnswerP2Task3 = document.querySelector("#AnswerP2Task3");
const taskAnswerMainTask3 = document.querySelector("#taskAnswerMainTask3");
const input1Task3 = document.querySelector("#input1Task3");
const input2Task3 = document.querySelector("#input2Task3");

// Variables of Task four
const _input1Task4 = document.querySelector("#input1Task4");
const _input2Task4 = document.querySelector("#input2Task4");
const _takeAnswerBtn4 = document.querySelector("#takeAnswerBtn4");
const _buttonReset4 = document.querySelector("#buttonReset4");
const _parentTaskAnswerZoneTask4 = document.querySelector(
  "#parentTaskAnswerZoneTask4"
);
const _AnswerP1Task4 = document.querySelector("#AnswerP1Task4");
const _AnswerP2Task4 = document.querySelector("#AnswerP2Task4");
const _taskAnswerMainTask4 = document.querySelector("#taskAnswerMainTask4");
const _span41 = document.querySelector("#span41");
const _span42 = document.querySelector("#span42");
const _spanMainAnswer = document.querySelector("#spanMainAnswer");

//******************************************************************************
//******************************* VARIABLES ************************************

// получаем зачение первого инпута и сохраняем в span
input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    taskAnswerP1.textContent = "Первое значение: ";
    let span = document.createElement("span");
    span.textContent = " " + this.value;
    span.id = "span1";
    taskAnswerP1.append(span);
    this.value = "";
  }
});

// получаем зачение второго инпута и сохраняем в span
input2.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    taskAnswerP2.textContent = "Второе значение: ";
    let span = document.createElement("span");
    span.textContent = " " + this.value;
    span.id = "span2";
    taskAnswerP2.append(span);
    this.value = "";
  }
});

// получаем зачение третьего инпута и сохраняем в span
input3.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    taskAnswerP3.textContent = "Третье значение: ";
    let span = document.createElement("span");
    span.textContent = " " + this.value;
    span.id = "span3";
    taskAnswerP3.append(span);
    this.value = "";
  }
});

// функция для определения Пифагоровой тройки
function isItPythagoreanTriple(a, b, c) {
  const aSquare = Math.pow(a, 2);
  const bSquare = Math.pow(b, 2);
  const cSquare = Math.pow(c, 2);

  const MaxValue = Math.max(aSquare, bSquare, cSquare);
  if (
    MaxValue == aSquare + bSquare ||
    MaxValue == aSquare + cSquare ||
    MaxValue == bSquare + cSquare
  ) {
    return true;
  } else return false;
}

// определяем по клику Пифагоровая ли это тройка и сохраяем результат в span
takeAnswerBtn1.addEventListener("click", function () {
  const a = Number(span1.textContent);
  const b = Number(span2.textContent);
  const c = Number(span3.textContent);

  if (isItPythagoreanTriple(a, b, c) == true) {
    let spanAnswer = document.createElement("span");
    spanAnswer.id = "spanAnswer";
    spanAnswer.textContent = "Да, это Пифагоровая тройка";
    taskAnswerMain.append(spanAnswer);
  } else {
    let spanAnswer = document.createElement("span");
    spanAnswer.id = "spanAnswer";
    spanAnswer.textContent = "Нет, это не Пифагровая тройка";
    taskAnswerMain.append(spanAnswer);
  }
});

// функция сброса
function resetValues() {
  span1.textContent = "";
  span2.textContent = "";
  span3.textContent = "";
  spanAnswer.textContent = "";
}

buttonReset1.addEventListener("click", resetValues);

input21.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let span1Task2 = document.createElement("span");
    span1Task2.textContent += " " + this.value;
    span1Task2.id = "span1Task2";
    taskAnswerMain2.append(span1Task2);
    this.value = "";
  }
});

// функция нахождения делителей числа
function takeDivisionsofNumb(numb) {
  let arr = [];
  for (let i = 2; i < numb; i++) {
    if (numb % i == 0) {
      arr.push(i);
    }
  }
  let result = "";

  for (let elem of arr) {
    result += " " + elem + ",";
  }
  result = result.slice(0, -1);
  return result;
}

// console.log(takeDivisionsofNumb(100));

takeAnswerBtn2.addEventListener("click", function () {
  let p = document.querySelector("p");
  p.textContent =
    "Список делителей: " + takeDivisionsofNumb(Number(span1Task2.textContent));
  parentTaskAnswerZoneTask2.append(p);
});

// сохраняем значение первого инпута в первый абзац
input1Task3.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    AnswerP1Task3.textContent = "Первое значение: ";
    let span31 = document.createElement("span");
    span31.textContent = " " + this.value;
    span31.id = "span31";
    AnswerP1Task3.append(span31);

    this.value = "";
  }
});

// сохраняем значение второго инпута во второй абзац
input2Task3.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    AnswerP2Task3.textContent = "Второе значение: ";
    let span32 = document.createElement("span");
    span32.id = "span32";
    span32.textContent = "";
    span32.textContent = this.value;
    AnswerP2Task3.append(span32);

    this.value = "";
  }
});

// функция для нахождения общих делителей
function takeCommonDivisions(numb1, numb2) {
  let str = "";

  for (let i = 2; i < numb1; i++) {
    if (numb1 % i == 0 && numb2 % i == 0) {
      str += " " + i + ",";
    }
  }
  str = str.substring(0, str.length - 1);
  return str;
}

// навешиваем функция на кнопку "узнать ответ"
takeAnswerBtn3.addEventListener("click", function () {
  taskAnswerMainTask3.textContent =
    "Все общие делители этих двух чисел: " +
    takeCommonDivisions(span31.textContent, span32.textContent);
});

// функция сброса
buttonReset3.addEventListener("click", function () {
  span31.textContent = "";
  span32.textContent = "";
  taskAnswerMainTask3.textContent = "Все общие делители этих двух чисел: ";
});

_input1Task4.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    _span41.textContent = this.value;
    this.value = "";
  }
});

_input2Task4.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    _span42.textContent = this.value;
    this.value = "";
  }
});

function takeMaxDivision(numb1, numb2) {
  let arr = [];
  for (let i = 2; i < numb1; i++) {
    if (numb1 % i == 0 && numb2 % i == 0) {
      arr.push(i);
    }
  }
  return Math.max.apply(null, arr);
}

// console.log(takeMaxDivision(100, 244));

_takeAnswerBtn4.addEventListener("click", function () {
  _spanMainAnswer.textContent = takeCommonDivisions(
    _span41.textContent,
    _span42.textContent
  );
});

function reset4() {
  _input1Task4.value = "";
  _input2Task4.value = "";
  _span41.textContent = "";
  _span42.textContent = "";
  _spanMainAnswer.textContent = "";
}

_buttonReset4.addEventListener("click", reset4);
