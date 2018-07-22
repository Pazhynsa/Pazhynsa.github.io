

//ПОИСК
// document -> область видимости html
// document.body -> область видимости body
// document.body.childNodes -> дочерние элементы
// document.body.firstChild -> первый элементы
// document.body.lastChild -> последний элементы
// document.getElementById('id') -> поиск по id
// document.getElementByTagName('li') -> поиск по тэгу
// document.getElementByClassName('menu-item') -> поиск по классу
// document.querySelector('.menu-item') -> поиск по классу, только 1-й попавшийся эл.
// document.querySelectorAll('.menu-item') -> поиск по классу, создает массив из эл.
// 
// var element = document.querySelectorAll('.menu-item') 
// console.log(element[2].innerHTML) -> получить контент
// console.log(element[2].getAttribute) -> получить ссылку
// 


// РЕДАКТИРОВАНИЕ
// element[2].innerHTML = 'text'; -> изменить контент
// element[2].setAttribute('href', 'http://'); -> изменить ссылку
// element[2].removeAttribute('href'); -> удалить атрибут
//  
//  
// console.log(link.className) -> выводит список классов
// link.className = link.className + ' js-class'; -> добавляет класс(внимание пробел!!!) ПЛОХОЙ ВАРИАНТ
// console.log(link.classList) -> выводит массив из классов 
//          методы:
//                  link.classList.add('js-second-class'); -> добавить класс
//                  link.classList.remove('js-second-class'); -> удалить класс
// link.style.backgroundColor = 'green'; -> изменение конкретного стиля (CamelCase вместо "-")





// ВСТАВКА/УДАЛЕНИЕ DOM-УЗЛОВ
// // var element = document.createElement('div'); -> создаем узловой элемент
// var wrapper = document.querySelector('wrapper');-> ищем родительский эл.
// // wrapper.appendChild(element);-> вставляем эл. в конец родительского 

// var wrapper = document.querySelectorAll('wrapper');-> ищем родительский эл.как массив
// // wrapper[1].appendChild(element);-> вставляем эл. в конец родительского
// wrapper.insertBefore(element, wrapper.children[0]);-> вставляем узловой эл. перед указанным ддочерним эл.
// // 
// var list = wrapper.querySelector('ul'); -> поиск эл. по уже определенному wrapper - быстрее!!!
// wrapper.removeChild(list); -> удаление найденного узла
// wrapper.replaceChild(element, list); -> замена 1-новым 2-старого узла 