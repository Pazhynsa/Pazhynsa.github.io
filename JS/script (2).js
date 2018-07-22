// alert('Hello');

// var a = prompt('Enter first number');
// var b = prompt('Enter second number');



// ОПЕРАТОР IF
// if (a > b){
//     alert('second less then first');
// } else if (a < b) {
//     alert('first less then second');
// } else {
//     alert('first and second equal');
// }



// МАССИВ
// var arr = [1, 2, 3];//массив
// // console.log ('arr.length is', arr.length);// сообщает о длинне массива
// console.log(arr);

// arr.push('3'); //добавляет новую переменную в конец массива
// console.log(arr);
// // console.log ('arr.length is', arr.length);
// // console.log('arr', arr[3]);

// // arr.pop();//удаляет последнюю переменную массива, которую затем возвращает.

// var lastVariable = arr.pop();
// console.log(arr);
// console.log('lastVariable', lastVariable);

// arr.unshift('text');//добавляет переменную в начало массива и смещает все остальные
// console.log('unshift', arr);

// var d = arr.shift();// удаляет первый элемент и возвращает его
// console.log('d', d);


// OBJECT 
// var obj = {
//     key: meaning, 
//     .
//     .
//     . 
//     key-n: meaning
// }

// var student = {
//     age: 24,
//     name: 'Serhii',
//     secondName: 'Pazhyn'
// }
// var k = 'secondName';

// if (k in student){//поиск по ключу в объекте
//     console.log(student[k]);
// } else {
//     console.log('no k');
// // }
// console.log(student);
// for (var k in student) {//пробегаемся по всему объекту и получаем значения
//     console.log('___________________________');
//     console.log('k', k);
//     console.log('student[k]', student[k]);
// }

// var keysList = Object.keys(student);//вывести массив из ключей
// console.log(keysList);



// DEBUGGER
// var arr = [1, 'fghjk', 8, true];

// for (var i = 0; i < arr.length; i++){
//     debugger;
//     console.log(arr[i]);
// }


// ЗАДАЧА 2.1
// function pow(x, n){
//     var result = +x;

//     for (var i = 1; i < +n; i++){
//         result *= x;
//     }
//     return result;
// }

// x = prompt('x?');
// n = prompt('n?');

// alert(pow(x, n));



// ЗАДАЧА 2.2
// function chec(array, value){
   
//     for (var i = 0; i < array.length; i++){
//         if (array[i] === value) {
//             return value;
//         }    
//     }
//     return false;
// }

// var userArr = [];
// for (var i = 0; i < 5; i++){
//     userArr[i] = prompt('Введите имя пользователя');
// }

// var userName = prompt('Ваше имя');

// var result = chec(userArr, userName);
// if (result) {
//     alert(userName + ', Вы успешно вошли');
// } else {
//     alert('Ошибка');
// }



