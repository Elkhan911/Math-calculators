// Variables of Task one
const input1Task1 = document.querySelector("#_input1Task1");
const input2Task1 = document.querySelector("#_input2Task1");
const input3Task1 = document.querySelector("#_input3Task1");
const takeAnswerBtn1 = document.querySelector("#_takeAnswerBtn1");
const buttonReset1 = document.querySelector("#_buttonReset1");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const span3 = document.querySelector("#_span3");
const spanAnswer = document.querySelector("#_spanAnswer");

// Variables of Task two
const input1Task2 = document.querySelector("#_input1Task2");
const taskAnswerMain2 = document.querySelector("#_taskAnswerMainTask2");
const takeAnswerBtn2 = document.querySelector("#_takeAnswerBtn2");
const buttonReset2 = document.querySelector("#_buttonReset2");
const parentTaskAnswerZoneTask2 = document.querySelector(
  "#parentTaskAnswerZoneTask2"
);
const span1Task2 = document.querySelector("#_span1Task2");
const spanAnswerTask2 = document.querySelector("#_spanAnswerTask2");

// Variables of Task three
const takeAnswerBtn3 = document.querySelector("#_takeAnswerBtn3");
const buttonReset3 = document.querySelector("#_buttonReset3");
const parentTaskAnswerZoneTask3 = document.querySelector(
  "#_parentTaskAnswerZoneTask3"
);
const AnswerP1Task3 = document.querySelector("#_AnswerP1Task3");
const AnswerP2Task3 = document.querySelector("#_AnswerP2Task3");
const taskAnswerMainTask3 = document.querySelector("#_taskAnswerMainTask3");
const input1Task3 = document.querySelector("#_input1Task3");
const input2Task3 = document.querySelector("#_input2Task3");
const span31 = document.querySelector("#_span31");
const span32 = document.querySelector("#_span32");

// Variables of Task four
const input1Task4 = document.querySelector("#_input1Task4");
const input2Task4 = document.querySelector("#_input2Task4");
const takeAnswerBtn4 = document.querySelector("#_takeAnswerBtn4");
const buttonReset4 = document.querySelector("#_buttonReset4");
const parentTaskAnswerZoneTask4 = document.querySelector(
  "#_parentTaskAnswerZoneTask4"
);
const AnswerP1Task4 = document.querySelector("#_AnswerP1Task4");
const AnswerP2Task4 = document.querySelector("#_AnswerP2Task4");
const taskAnswerMainTask4 = document.querySelector("#_taskAnswerMainTask4");
const span41 = document.querySelector("#_span41");
const span42 = document.querySelector("#_span42");
const spanMainAnswer = document.querySelector("#_spanMainAnswer");

//******************************************************************************
//******************************* VARIABLES ************************************

//******************************************************************************
//******************************* TASK ONE  ************************************

// получаем зачение первого инпута и сохраняем в span
input1Task1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span1.textContent = " " + this.value;
    this.value = "";
  }
});

// получаем зачение второго инпута и сохраняем в span
input2Task1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span2.textContent = " " + this.value;
    this.value = "";
  }
});

// получаем зачение третьего инпута и сохраняем в span
input3Task1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span3.textContent = " " + this.value;
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
    spanAnswer.textContent = "Да, это Пифагоровая тройка";
  } else {
    spanAnswer.textContent = "Нет, это не Пифагровая тройка";
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

//******************************************************************************
//******************************* TASK TWO *************************************

input1Task2.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span1Task2.textContent = this.value;
    this.value = "";
  }
});

// функция нахождения делителей числа
function takeDivisionsofNumb(numb) {
  let result = "";
  for (let i = 2; i < numb; i++) {
    if (numb % i == 0) {
      result += i + "," + " ";
    }
  }
  result = result.slice(0, -2);
  return result;
}

// console.log(takeDivisionsofNumb(100));

takeAnswerBtn2.addEventListener("click", function () {
  spanAnswerTask2.textContent = takeDivisionsofNumb(span1Task2.textContent);
});

buttonReset2.addEventListener("click", function () {
  span1Task2.textContent = "";
  spanAnswerTask2.textContent = "";
  input1Task2.value = "";
});

//******************************************************************************
//******************************* TASK THREE ***********************************

// сохраняем значение первого инпута в первый абзац
input1Task3.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span31.textContent = " " + this.value;
    this.value = "";
  }
});

// сохраняем значение второго инпута во второй абзац
input2Task3.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span32.textContent = this.value;
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

// console.log(takeCommonDivisions(100, 200));

// навешиваем функцию на кнопку "узнать ответ"
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

input1Task4.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span41.textContent = this.value;
    this.value = "";
  }
});

input2Task4.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span42.textContent = this.value;
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

takeAnswerBtn4.addEventListener("click", function () {
  spanMainAnswer.textContent = takeCommonDivisions(
    span41.textContent,
    span42.textContent
  );
});

function reset4() {
  input1Task4.value = "";
  input2Task4.value = "";
  span41.textContent = "";
  span42.textContent = "";
  spanMainAnswer.textContent = "";
}

buttonReset4.addEventListener("click", reset4);
