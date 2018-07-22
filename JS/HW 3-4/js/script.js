var makePage = {
    // addClassToScript: function(){
    //     var scriptSource = document.body.childNodes;
    //     scriptSource.classList.add('js-class');
    // },
    // backgroundColor: 'blue',

    title: 'Тест по программированию',
    ansverVariants: 'Вариант ответа №', 
    questions: 'Вопрос №',
    buttonText: 'Проверить мои результаты',

    makeDivGlobal: function(){
        var divGlobal = document.createElement('div');
        var body = document.body;
        body.insertBefore(divGlobal, body.children[0]);
        divGlobal.classList.add('global-div');   
    },

    
    makeDiv: function(){
        var div = document.createElement('div');
        div.classList.add('js-div');
        var divGlobal = document.querySelector('.global-div');
        divGlobal.appendChild(div); 
    },

    makeTitle: function(){
        var title = document.createElement('h1');
        var div = document.querySelector('.js-div');
        div.appendChild(title);
        title.innerHTML = this.title;
        title.style.marginLeft = '100px';
    }, 
    
    makeOrderedList: function(){
        var ol = document.createElement('ol');
        var div = document.querySelector('.js-div');
        div.appendChild(ol);
    },

    makeQuestions: function(){
        for (var i = 1; i < 4; i++){
            var question = document.createElement('li');
            var ol = document.querySelector('ol');
            ol.appendChild(question);
            question.innerHTML = (this.questions + i);
        }
    },

    makeVariants: function(){
        var li = document.querySelectorAll('li');
        for (var i = 0; i < li.length; i++){
            var ul = document.createElement('ul');
            li[i].appendChild(ul);
            
            for (var j = 1; j < 4; j++){
                var variant = document.createElement('li');
                ul.appendChild(variant);
                variant.innerHTML = (this.ansverVariants + j); 
            }
        }
    },
    
    makeButton: function(){
        var input = document.createElement('input');
        var div = document.querySelector('.js-div');
        div.appendChild(input);
        input.setAttribute('type', 'button');
        input.setAttribute('value', this.buttonText);
        input.setAttribute('href', 'http://google.com/');
        
    },
    
    makeStyle: function(){
        var body = document.body;
        body.style.backgroundColor = 'gray';
        body.style.heigth = '1000px';
        
        var div = document.querySelector('.js-div');
        div.style.backgroundColor = 'white';
        div.style.width = '800px';
        // div.style.heigth = '800px';
        div.style.marginLeft = 'auto';
        div.style.marginRight = 'auto';
        div.style.marginTop = '100px';
        div.style.marginDown = '100px';
        div.style.зфввштпTop = '50px';
        div.style.зфввштпDown = '50px';
    },

    makeBootstrapStyle: function(){
        var head = document.querySelector('head');
        var link = document.createElement('link');
        head.appendChild(link);
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css');
        link.setAttribute('integrity', 'sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B');
        link.setAttribute('crossorigin', 'anonymous');


        // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" 
        // integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" 
        // crossorigin="anonymous">

    }
}


makePage.makeDivGlobal();
makePage.makeDiv();
makePage.makeTitle();
makePage.makeOrderedList();
makePage.makeQuestions();
makePage.makeVariants();
makePage.makeButton();
makePage.makeBootstrapStyle();
makePage.makeStyle();