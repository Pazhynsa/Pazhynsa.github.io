// call/apply
// calculate.call(contex, arg1, arg2 ...); - общий вид
// calculate.apply(contex, [arg1, arg2 ...]); - общий вид


/* function calculateMoney(a, b) {
    console.log(this); //-> просмотреть скоуп 
    console.log(' I am ' + this.firstName + ' ' + this.lastName + ' have ' + (a + b) + ' dollars');
}

calculateMoney(5, 3);*/


/* ПРИМЕНЕНИЕ CALL или APPLY
function calculateMoney(a, b) {
    console.log(this); //-> просмотреть скоуп
    console.log(' I am ' + this.firstName + ' ' + this.lastName + ' have ' + (a + b) + ' dollars');
}

var context = {
    firstName: 'Vasya',
    lastName: 'Pupkin'
}
calculateMoney.call(context, 5, 3);// -> задаем скоуп, как отдельные аргументы

calculateMoney.apply(context, [5, 3]);// -> задаем скоуп, как массив аргументов
 */


/* function printArguments() { // аргументы не объявлены
    var args = [].slice.call(arguments); // получаем значение массива с помощью метода slice и вызываем данный метод в контексте arguments
    args.push('text');
    console.log(args)
}

printArguments(1, 2, 3); */