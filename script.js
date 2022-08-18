const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const ParentTaskAnswerZone = document.querySelector("#ParentTaskAnswerZone");
const takeAnswerBtn = document.querySelector("#takeAnswerBtn");
const buttonReset = document.querySelector("#buttonReset");

const taskAnswerP1 = document.querySelector("#taskAnswerP1");
const taskAnswerP2 = document.querySelector("#taskAnswerP2");
const taskAnswerP3 = document.querySelector("#taskAnswerP3");
const taskAnswerMain = document.querySelector("#taskAnswerMain");

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
takeAnswerBtn.addEventListener("click", function () {
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

buttonReset.addEventListener("click", resetValues);
