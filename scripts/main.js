//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//document.querySelector('html').onclick = function() {
 //   alert('Ouch! Stop poking me!');
//}
var myImage = document.querySelector('img'); 			//Присвоили переменной элемент файла html

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src'); 			//Мы получаем значение из атрибута src изображения (т.е получаем свойство изображения (его путь))
    if(mySrc === 'images/2.jpg') {  		 		  	//Если это свойство равно пути к исходному изображению
      myImage.setAttribute ('src','images/6.jpg');		//То мы меняем значение src (это свойство) на путь ко 2-му изображению
    } else {
      myImage.setAttribute ('src','images/2.jpg');		//Если это не так (значит, оно должно было уже измениться), мы меняем значение src, возвращаясь к первоначальному пути изображения, каким он был изначально.
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');         //prompt - вызывает диалоговое окно, просит ввести данные и сохраняет эти данные в переменной myName
  localStorage.setItem('name', myName);						//localStorage- апи, который позволяет нам хранить данные в браузере и извлекать их позднее , setItem- для создания и хранения данных введенных пользователем в свойстве под названием name
  myHeading.innerHTML  = 'Приветик, ' + myName;		//innerHTML-свойство переменной,котор представляет собой контент заголовка
}
if(!localStorage.getItem('name')) {							// проверяем нет ли в апи данных
  setUserName();   											//если их нет вызываем функцию setUserName
} else {
  var storedName = localStorage.getItem('name');			//если есть данные введенные ранее, мы их присваим переменной storedName 
  myHeading.innerHTML  = 'Приветик, ' + storedName;  //и дописываем к строке
}
myButton.onclick = function() { 							//при нажатии на кнопку вызываем функцию
  setUserName();
}
