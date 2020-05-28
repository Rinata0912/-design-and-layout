// let name = prompt('Какое официальное название жабы скрипт?', '');

// if (name == 'ECMAscript' | name == 'ecmascript' | name == 'ECMASCRIPT'){
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAscript');
// }


// let number = prompt('Введите целое число', '999')

// if (number > 0) {
//     alert('1');
// } else if(number < 0) {
//     alert('-1');
// } else if(number == 0) {
//     alert('0');
// } else {
//     alert('Вы ввели не числовое значение');
// }


// let a = +prompt('a','');
// let b = +prompt('b','');
// let result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result + ' ' + (a+b));


// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор')? 'Здравствуйте' :
//     (login == '')? 'Нет логина' : '';



// let userName = prompt('введите логин', '');

// if(userName === 'Админ') {
//     let password = prompt('введите пароль', '');
//     if(password === 'Я главный'){
//         alert('здравствуйте!');
//     } else if(password === '' || password === null){
//         alert('отменено');
//     } else {
//         alert('неверный пароль');
//     }
// } else if(userName === null || userName === '') {
//     alert('отменено');
// } else {
//     alert('я вас не знаю');
// }

// let n = prompt('введите ограничение', '');
// let i, j;

// k: for(i = 2; i <= n; i++){
//     for(j = 2; j < i; j++){
//         if(i % j == 0){
//             continue k;
//         }
//     }
//     alert(i);
// }

// function getMin (a, b){
//     return (a < b) ? a : b;
// }

// console.log(getMin(6,11));

// function getPow(x, n){
//     let a = x;
//     for(let i = 1; i < n; i++){
//         a *= x;
//     }
//     return a;
// }

// let x = +prompt('x', '');
// let n = +prompt('n', '');

// alert(getPow(x,n));

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function sum(obj){
//   let sum = 0;
//   for(let key in obj){
//     sum += obj[key];
//   }
//   return sum;
// }

// alert( sum(salaries) );



// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2
// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj){
//   for(let key in obj){
//     if(typeof(obj[key]) === 'number'){
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// console.log(menu);

// // после вызова функции
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };

// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.


// let calculator = {
//   read(){
//     this.a = +prompt('Введите а', '');
//     this.b = +prompt('Введите b', '');
//   },
//   sum(){
//     return this.a + this.b;
//   },
//   mul(){
//     return this.a * this.b;
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// function Calculator() {
//   this.read = function(){
//     this.a = +prompt('Введите а', '');
//     this.b = +prompt('Введите b', '');
//   },
//   this.sum = function(){
//     return this.a + this.b;
//   },
//   this.mul = function(){
//     return this.a * this.b;
//   }
// };

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:
// function Accumulator(startingValue){
//   this.value = startingValue;
//   this.read = function(){
//     this.value = +prompt("Введите число",'') + +this.value;
//   };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений


// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

// function readNumber(){
//   let n;
//   let i;
//   for(i = 0; !isFinite(n); i++){
//     n = prompt('введите число', '');
//     if(n === null || n === '') break;
//   }
//   return n;
// }

// readNumber();


// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// Пример работы функции:

function random(min, max){
  min = prompt('введите мин', '');
  max = prompt('введите макс', '');
  
}
