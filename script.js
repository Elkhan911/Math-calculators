let input1 = document.querySelector("#_input1");
let input2 = document.querySelector("#_input2");
let input3 = document.querySelector("#_input3");
let span1 = document.querySelector("#_span1");
let span2 = document.querySelector("#_span2");
let span3 = document.querySelector("#_span3");
const answerBtn1 = document.querySelector("#_answerBtn1");
const resetBtn1 = document.querySelector("#_resetBtn1");
let spanResult = document.querySelector("#_spanResult1");

let input12 = document.querySelector("#_input12");
let span21 = document.querySelector("#_span21");
const answerBtn2 = document.querySelector("#_answerBtn2");
const resetBtn2 = document.querySelector("#_resetBtn2");
let spanAnswer2 = document.querySelector("#_spanAnswer2");

let input13 = document.querySelector("#_input13");
let input23 = document.querySelector("#_input23");
let span31 = document.querySelector("#_span31");
let span32 = document.querySelector("#_span32");
const answerBtn3 = document.querySelector("#_answerBtn3");
const resetBtn3 = document.querySelector("#_resetBtn3");
let spanAnswer3 = document.querySelector("#_spanAnswer3");

let input14 = document.querySelector("#_input14");
let input24 = document.querySelector("#_input24");
let span41 = document.querySelector("#_span41");
let span42 = document.querySelector("#_span42");
const answerBtn4 = document.querySelector("#_answerBtn4");
const resetBtn4 = document.querySelector("#_resetBtn4");
let spanAnswer4 = document.querySelector("#_spanAnswer4");

//******************************************************************************
//******************************* VARIABLES ************************************

//******************************************************************************
//*******************************  ONE  ************************************

// функция для проверки значения инпута - цифра ли это? не пустое ли значение?
function isItNaNOrEmpty(value) {
  if (isNaN(Number(value)) || value == "" || value == " " || value == "  ") {
    alert("Нужно ввести число");
    value == "";
    return false;
  } else return true;
}

// функция для получения значения с инпута и сохранения значения в спан
function takeInputValue(input, span) {
  input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      if (isItNaNOrEmpty(this.value)) {
        span.textContent = this.value;
        this.value = "";
      }
    }
  });
}

// 1. получаем зачение первого инпута и сохраняем в соответствующий span
takeInputValue(input1, span1);

// 2. получаем зачение второго инпута и сохраняем в соответствующий span
takeInputValue(input2, span2);

// 3. получаем зачение третьего инпута и сохраняем в соответствующий span
takeInputValue(input3, span3);

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
    spanResult.textContent = "да, это Пифагоровая тройка";
  } else {
    spanResult.textContent = "нет, это не Пифагровая тройка";
  }
});

// функция сброса
function resetValues() {
  span1.textContent = "";
  span2.textContent = "";
  span3.textContent = "";
  spanResult.textContent = "";
}

// 5. навешиваем функцию сброса на кнопку
resetBtn1.addEventListener("click", resetValues);

// //******************************************************************************
// //*******************************  TWO *************************************

// // 1. получаем зачение инпута и сохраняем в span
// takeInputValue(input12, span21);

// // функция нахождения делителей числа
// function takeDivisionsofNumb(numb) {
//   let result = "";
//   for (let i = 2; i < numb; i++) {
//     if (numb % i == 0) {
//       result += i + "," + " ";
//     }
//   }
//   result = result.slice(0, -2);
//   return result;
// }

// // console.log(takeDivisionsofNumb(100));

// // 2. навешиваем функцию нахождения делителей на кнопку и сохраняем результат в span
// answerBtn2.addEventListener("click", function () {
//   spanAnswer2.textContent = takeDivisionsofNumb(span21.textContent);
// });

// // 3. навешиваем на клик анонимную функцию сброса
// resetBtn2.addEventListener("click", function () {
//   span21.textContent = "";
//   spanAnswer2.textContent = "";
//   input12.value = "";
// });

// //******************************************************************************
// //*******************************  THREE ***********************************

// // 1. сохраняем значение первого инпута в первый абзац
// takeInputValue(input13, span31);

// // 2. сохраняем значение второго инпута во второй абзац
// takeInputValue(input23, span32);

// // функция для нахождения общих делителей
// function takeCommonDivisions(numb1, numb2) {
//   let str = "";

//   for (let i = 2; i < numb1; i++) {
//     if (numb1 % i == 0 && numb2 % i == 0) {
//       str += " " + i + ",";
//     }
//   }
//   str = str.substring(0, str.length - 1);
//   return str;
// }

// // console.log(takeCommonDivisions(100, 200));

// // 3. навешиваем функцию на кнопку "узнать ответ"
// answerBtn3.addEventListener("click", function () {
//   spanAnswer3.textContent =
//     "Все общие делители этих двух чисел: " +
//     takeCommonDivisions(span31.textContent, span32.textContent);
// });

// // 4. функция сброса
// resetBtn3.addEventListener("click", function () {
//   span31.textContent = "";
//   span32.textContent = "";
//   spanAnswer3.textContent = "Все общие делители этих двух чисел: ";
// });

// //******************************************************************************
// //*******************************  FOUR ************************************

// // 1. получаем значение первого инпута и сохраняем в span
// takeInputValue(input14, span41);

// // 2. получаем значение второго инпута и сохраняем в span
// takeInputValue(input24, span42);

// // функция для определения наибольшего общего делителя
// function takeMaxDivision(numb1, numb2) {
//   let arr = [];
//   for (let i = 2; i < numb1; i++) {
//     if (numb1 % i == 0 && numb2 % i == 0) {
//       arr.push(i);
//     }
//   }
//   return Math.max.apply(null, arr);
// }

// console.log(takeMaxDivision(100, 244));

// // 3. по клику сохраняем результат в span
// answerBtn4.addEventListener("click", function () {
//   spanAnswer4.textContent = takeCommonDivisions(
//     span41.textContent,
//     span42.textContent
//   );
// });

// function reset4() {
//   input14.value = "";
//   input24.value = "";
//   span41.textContent = "";
//   span42.textContent = "";
//   spanAnswer4.textContent = "";
// }

// // навешиваем на кнопку функцию сброса
// resetBtn4.addEventListener("click", reset4);
