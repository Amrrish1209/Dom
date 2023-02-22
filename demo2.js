var newDiv=document.createElement('div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);

