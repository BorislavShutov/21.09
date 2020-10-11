'use strict';

alert('Ворон и Ворона - это разные виды птиц!)');

const hello = document.querySelector('.hello-item'),
	  myText = document.querySelector('header'),
	  addElement = document.querySelector('body');
	  
	  
	   

hello.style.cssText = 'background-color : #fcbe05; color : red;font-weight : 700;';

myText.style.cssText = 'background-color : #fcb;';



myText.insertAdjacentHTML('afterbegin', '<h1><strong>JS Bro</strong></h1>');
addElement.insertAdjacentHTML('beforeend', '<h3><strong>New Block</strong></h3>');
addElement.insertAdjacentHTML('beforeend', '<img src="img/1.jpg" alt="foto"></im>');
addElement.style.cssText = 'background-color: #fff; text-align: center; color: #000;';




