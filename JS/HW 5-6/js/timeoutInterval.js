/* SETTIMEOUT
function someFunction() {     -> создаем функцию
    console.log('it works!');
}
setTimeout(someFunction, 2000);//ms -> вызываем функцию через 2с
 */

/* SETINTERVAL
function someFunction() {
    console.log('it works!');
}
setInterval(someFunction, 1000);//ms -> повторяем вызов функции каждую 1с
 */

/* CLEARTIMEOUT
var timerId = setTimeout(someFunction, 500);//ms -> помещаем результат выведения функции в переменную
clearTimeout(timerId); -> обнуляем результат
 */

/* CLEARINTERVAL
function someFunction() {
    console.log('it works!');
    clearInterval(timerId); //-> обнуляем результат
}
var timerId = setInterval(someFunction, 1000);//ms -> помещаем результат выведения функции в переменную

 */

/* clearInterval by cycle IF
var counter = 0;
function someFunction() {
    console.log('it works!', 'counter = ', counter);
    counter++;
    if (counter === 5){
        clearInterval(timerId); //-> обнуляем результат
    }
}
var timerId = setInterval(someFunction, 10);//ms -> помещаем результат 
                                                    //выведения функции в переменную */