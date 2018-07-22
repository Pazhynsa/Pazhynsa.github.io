// СОЗДАНИЕ СОБЫТИЯ

// 1. <li><a href="#" onclick="alert('test');" -> в HTML

// 2. elem.onclick = function(){  -> обработчик событий в js
    // alert('test'); 
// }

// 3. elem.addEventListener('click', function(){  -> js при клике
//     alert('test');
// });



// ПРИМЕР
// для всех браузеров
// function handler(){
    // alert('test');
// }

// elem.addEventListener('click', handler); -> создать событие, кот будет реагировать на click мишью, имя функции безскобок.

// elem.removeEventListener('click', handler); -> удалить это же событие

// для IE8-
// elem.attachEvent('onclick', handler);
// elem.detachEvent('onclick', handler);



// СОЗДАНИЕ КРОССБРАУЗЕРНОГО СОБЫТИЯ
// var link = document.querySelector('a');

// function handler(){
//     console.log('it works!');
// }

// function addEvent(el, event, callback){
//     if (window.attachEvent){
//         el.attachEvent('on' + event, callback);
//     }else{
//         el.addEventListener(event, callback);
//     }
// }

// addEvent(link, 'click', handler);



// window.addEventListener('click', handler); -> работаепри клике в любой точке окна


// function handler(event){            -> объект событий в котором хранится служебная информация
//     console.log('event', event);    -> может обозначаться как event/ev/e
// }

// function handler(event){                     
//     console.log('event', event.keyCode);    -> показывает какая клавиша была нажата
//     if (event.keyCode === 13){              -> код клавиши энтер
//         alert('Enter is pressed!');
//     }
// }


