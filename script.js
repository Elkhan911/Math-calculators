let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let ParentTaskAnswerZone = document.querySelector("#ParentTaskAnswerZone");
let button1 = document.querySelector("#button1");
let buttonReset = document.querySelector("#buttonReset");

//******************************************************************************
//******************************* VARIABLES ************************************

// +- функция для определения Пифагоровой тройки
function isItPythagoreanTriple(a, b, c) {
  let aSquare = Math.pow(a, 2);
  let bSquare = Math.pow(b, 2);
  let cSquare = Math.pow(c, 2);

  console.log(aSquare, bSquare, cSquare);

  let max = Math.max(aSquare, bSquare, cSquare);
  console.log(max);

  if (
    max == aSquare + bSquare ||
    max == aSquare + cSquare ||
    max == bSquare + cSquare
  ) {
    return true;
  } else return false;
}

// console.log(isItPythagoreanTriple(4, 3, 5));

input1.addEventListener("blur", func1);

function func1() {
  let p = document.createElement("p");
  p.textContent = "Первое значение: " + this.value;
  ParentTaskAnswerZone.append(p);

  input1.removeEventListener("blur", func1);
}

input2.addEventListener("blur", function () {
  let p = document.createElement("p");
  p.textContent = "Второе значение: " + this.value;
  ParentTaskAnswerZone.append(p);
});

input3.addEventListener("blur", function () {
  let p = document.createElement("p");
  p.textContent = "Третье значение: " + this.value;
  ParentTaskAnswerZone.append(p);
});

button1.addEventListener("click", function () {
  if (isItPythagoreanTriple(input1.value, input2.value, input3.value)) {
    taskAnswer1.textContent += "Да, это Пифагорова тройка";
  } else {
    taskAnswer1.textContent += "Нет, это не Пифагорова тройка";
  }
});

buttonReset.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
  input3.value = "";

  taskAnswer1.textContent = "Введеные значения являеются Пифагоровой тройкой?";
});
