/* var a = {};
var b = [];

var c = new Object(); //-> использование конструктора
                        // для создания нового объекта
var d = new Array(1, 2, 3);

console.log(c);
console.log(d);
 */


/* function animal () {
    this.name = 'Sharik';
    this.color = 'black';
}

var dog = new animal(); //-> сборка объекта через конструктор
console.log(dog);
 */

/* 
function Animal (newName, newColor) {// -> создание класса, пишем название с большой буквы
    this.name = newName;
    this.color = newColor;
}

var dog = new Animal('Jack', 'white'); //-> сборка объекта через конструктор
console.log(dog);
 */


/* function Animal (newName, newColor) {// -> создание класса, пишем название с большой буквы
    this.name = newName;
    this.color = newColor;
    this.noise = function(){ // -> создание метода в классе
        alert("Hello, I am " + this.name);
    }
}

var dog = new Animal('Jack', 'white'); //-> сборка объекта через конструктор
console.log(dog);
dog.noise(); // -> вызов метода через объект
 */


/* function Animal (newName, newColor) {// -> создание класса, пишем название с большой буквы
    var abc = 'internal cariable' //-> служебная переменная не отображается в глобальном скоупе и объекте
    var self = this; // -> создание переменной во избежание путаницы с this на различных уровнях
    newName = newName.toUpperCase();
    self.name = newName;
    self.color = newColor;

    self.noise = function(){ // -> создание метода в классе
        // alert("Hello, I am " + self.name);
        self._noise(); // ->  можно вызывать приватные методы в публичных и к ним уже обращаться 
    }
    
    self._noise = function(){ // ->  метод кот. начинается с "_" является приватным, его нельзя вызывать извне
        alert("Hello, I am " + self.name);
    }
}

var dog = new Animal('Jack', 'white'); //-> сборка объекта через конструктор
console.log(dog);
dog.noise(); // -> вызов метода через объект */