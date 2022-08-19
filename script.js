// Variables of Task one
const input1Task1 = document.querySelector("#_input1Task1");
const input2Task1 = document.querySelector("#_input2Task1");
const input3Task1 = document.querySelector("#_input3Task1");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const span3 = document.querySelector("#_span3");
const answerBtn1 = document.querySelector("#_answerBtn1");
const resetBtn1 = document.querySelector("#_resetBtn1");
const spanAnswerTask1 = document.querySelector("#_spanAnswerTask1");

// Variables of Task two
const input1Task2 = document.querySelector("#_input1Task2");
const span21 = document.querySelector("#span21");
const answerBtn2 = document.querySelector("#_answerBtn2");
const resetBtn2 = document.querySelector("#_resetBtn2");
const spanAnswerTask2 = document.querySelector("#_spanAnswerTask2");

// Variables of Task three
const input1Task3 = document.querySelector("#_input1Task3");
const input2Task3 = document.querySelector("#_input2Task3");
const span31 = document.querySelector("#_span31");
const span32 = document.querySelector("#_span32");
const answerBtn3 = document.querySelector("#_answerBtn3");
const resetBtn3 = document.querySelector("#_resetBtn3");
const spanAnswerTask3 = document.querySelector("#_spanAnswerTask3");

// Variables of Task four
const input1Task4 = document.querySelector("#_input1Task4");
const input2Task4 = document.querySelector("#_input2Task4");
const span41 = document.querySelector("#_span41");
const span42 = document.querySelector("#_span42");
const answerBtn4 = document.querySelector("#_answerBtn4");
const resetBtn4 = document.querySelector("#_resetBtn4");
const spanAnswerTask4 = document.querySelector("#_spanAnswerTask4");

//******************************************************************************
//******************************* VARIABLES ************************************

//******************************************************************************
//******************************* TASK ONE  ************************************

// функция для получения значения с инпута и сохранения значения в спан
function takeInputValue(input, span) {
  input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      span.textContent = this.value;
      this.value = "";
    }
  });
}

// 1. получаем зачение первого инпута и сохраняем в span
takeInputValue(input1Task1, span1);

// 2. получаем зачение второго инпута и сохраняем в span
takeInputValue(input2Task1, span2);

// 3. получаем зачение третьего инпута и сохраняем в span
takeInputValue(input3Task1, span3);

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

// 4. определяем по клику Пифагоровая ли это тройка и сохраяем результат в span
answerBtn1.addEventListener("click", function () {
  const a = Number(span1.textContent);
  const b = Number(span2.textContent);
  const c = Number(span3.textContent);

  if (isItPythagoreanTriple(a, b, c) == true) {
    spanAnswerTask1.textContent = "Да, это Пифагоровая тройка";
  } else {
    spanAnswerTask1.textContent = "Нет, это не Пифагровая тройка";
  }
});

// функция сброса
function resetValues() {
  span1.textContent = "";
  span2.textContent = "";
  span3.textContent = "";
  spanAnswerTask1.textContent = "";
}

// 5. навешиваем функцию сброса на кнопку
resetBtn1.addEventListener("click", resetValues);

//******************************************************************************
//******************************* TASK TWO *************************************

// 1. получаем зачение инпута и сохраняем в span
takeInputValue(input1Task2, span21);

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

// 2. навешиваем функцию нахождения делителей на кнопку и сохраняем результат в span
answerBtn2.addEventListener("click", function () {
  spanAnswerTask2.textContent = takeDivisionsofNumb(span21.textContent);
});

// 3. навешиваем на клик анонимную функцию сброса
resetBtn2.addEventListener("click", function () {
  span21.textContent = "";
  spanAnswerTask2.textContent = "";
  input1Task2.value = "";
});

//******************************************************************************
//******************************* TASK THREE ***********************************

// 1. сохраняем значение первого инпута в первый абзац
takeInputValue(input1Task3, span31);

// 2. сохраняем значение второго инпута во второй абзац
takeInputValue(input2Task3, span32);

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

// 3. навешиваем функцию на кнопку "узнать ответ"
answerBtn3.addEventListener("click", function () {
  spanAnswerTask3.textContent =
    "Все общие делители этих двух чисел: " +
    takeCommonDivisions(span31.textContent, span32.textContent);
});

// 4. функция сброса
resetBtn3.addEventListener("click", function () {
  span31.textContent = "";
  span32.textContent = "";
  spanAnswerTask3.textContent = "Все общие делители этих двух чисел: ";
});

//******************************************************************************
//******************************* TASK FOUR ************************************

// 1. получаем значение первого инпута и сохраняем в span
takeInputValue(input1Task4, span41);

// 2. получаем значение второго инпута и сохраняем в span
takeInputValue(input2Task4, span42);

// функция для определения наибольшего общего делителя
function takeMaxDivision(numb1, numb2) {
  let arr = [];
  for (let i = 2; i < numb1; i++) {
    if (numb1 % i == 0 && numb2 % i == 0) {
      arr.push(i);
    }
  }
  return Math.max.apply(null, arr);
}

console.log(takeMaxDivision(100, 244));

// 3. по клику сохраняем результат в span
answerBtn4.addEventListener("click", function () {
  spanAnswerTask4.textContent = takeCommonDivisions(
    span41.textContent,
    span42.textContent
  );
});

// функция для записи результата по клику в span
function getResult(button, span, func) {
  button.addEventListener("click", function () {
    span.textContent = func();
  });
}

getResult(
  answerBtn4,
  spanAnswerTask4,
  takeCommonDivisions(span41.textContent, span42.textContent)
);

function reset4() {
  input1Task4.value = "";
  input2Task4.value = "";
  span41.textContent = "";
  span42.textContent = "";
  spanAnswerTask4.textContent = "";
}

// навешиваем на кнопку функцию сброса
resetBtn4.addEventListener("click", reset4);
