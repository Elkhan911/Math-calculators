// цифры в намеиновании переменных означает следующее:
// первая цифра - это номер задания, вторая цифра - порядковый номер
// К примеру, input32 - это третья задача, второй инпут

const input11 = document.querySelector("#_input11");
const input12 = document.querySelector("#_input12");
const input13 = document.querySelector("#_input13");
const span11 = document.querySelector("#_span11");
const span12 = document.querySelector("#_span12");
const span13 = document.querySelector("#_span13");
const answerBtn11 = document.querySelector("#_answerBtn11");
const resetBtn11 = document.querySelector("#_resetBtn11");
const spanResult11 = document.querySelector("#_spanResult11");

const input21 = document.querySelector("#_input21");
const span21 = document.querySelector("#_span21");

const input31 = document.querySelector("#_input31");
const input32 = document.querySelector("#_input32");
const span31 = document.querySelector("#_span31");
const span32 = document.querySelector("#_span32");
const answerBtn31 = document.querySelector("#_answerBtn31");
const resetBtn31 = document.querySelector("#_resetBtn31");
const span33 = document.querySelector("#_span33");

const input14 = document.querySelector("#_input14");
const input24 = document.querySelector("#_input24");
const span41 = document.querySelector("#_span41");
const span42 = document.querySelector("#_span42");
const answerBtn4 = document.querySelector("#_answerBtn4");
const resetBtn4 = document.querySelector("#_resetBtn4");
const spanAnswer4 = document.querySelector("#_spanAnswer4");

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
takeInputValue(input11, span11);

// 2. получаем зачение второго инпута и сохраняем в соответствующий span
takeInputValue(input12, span12);

// 3. получаем зачение третьего инпута и сохраняем в соответствующий span
takeInputValue(input13, span13);

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
answerBtn11.addEventListener("click", function () {
  const a = Number(span11.textContent);
  const b = Number(span12.textContent);
  const c = Number(span13.textContent);
  if (isItNaNOrEmpty(a) && isItNaNOrEmpty(b) && isItNaNOrEmpty(c)) {
    if (isItPythagoreanTriple(a, b, c) == true) {
      spanResult11.textContent = "да, это Пифагоровая тройка";
    } else {
      spanResult11.textContent = "нет, это не Пифагровая тройка";
    }
  }
});

// функция сброса
function resetValues() {
  span11.textContent = "";
  span12.textContent = "";
  span13.textContent = "";
  spanResult11.textContent = "";
}

// 5. навешиваем функцию сброса на кнопку
resetBtn11.addEventListener("click", resetValues);

// //******************************************************************************
// //*******************************  TWO *************************************

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

input21.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span21.textContent = takeDivisionsofNumb(input21.value);
    input21.value = "";
  }
});

// //******************************************************************************
// //*******************************  THREE ***********************************

// 1. сохраняем значение первого инпута в первый абзац
takeInputValue(input31, span31);
// 2. сохраняем значение второго инпута во второй абзац
takeInputValue(input32, span32);
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

// 3. навешиваем функцию на кнопку "узнать ответ"
answerBtn31.addEventListener("click", function () {
  span33.textContent = takeCommonDivisions(
    span31.textContent,
    span32.textContent
  );
});
// 4. функция сброса
resetBtn31.addEventListener("click", function () {
  span31.textContent = "";
  span32.textContent = "";
  span33.textContent = "";
});

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
