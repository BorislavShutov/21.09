'use strict';

alert('Ворон и Ворона - это разные виды птиц!)');

const hello = document.querySelector('.hello-item'),
	  myText = document.querySelector('header'),
	  addElement = document.querySelector('body'),
	  newBlock = document.querySelector('.new-block'),
	  footerBlock = document.querySelector('footer');
	  
	  
	   

hello.style.cssText = 'background-color : #fcbe05; color : red;font-weight : 700;';

myText.style.cssText = 'background-color : #fcb;';



myText.insertAdjacentHTML('afterbegin', '<h1><strong>JS Bro</strong></h1>');
newBlock.insertAdjacentHTML('afterbegin', '<img src="img/1.jpg" alt="name">');
newBlock.style.cssText = 'background-color : #0008; color : #fff; display : flex; justify-content : center; flex-flow : column; padding : 2em;';
footerBlock.insertAdjacentHTML('afterbegin', '<p>Contacts: +343 23 345 65 44</p>');

footerBlock.style.cssText = 'font-size: 22px; text-align: center; padding: 2em;background-color: #fcbe05;';


