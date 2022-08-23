/* 
The load event is fired when the whole page is loaded, including
all dependent resources such as stylesheet and images.This is
in contrast to DOMContentLoaded, which is fired as soon as the 
page DOM has been loaded , without waiting for the resource to finish 
loading.
*/
window.addEventListener('load',function(){
 console.log('I will run second')
 const img = this.document.querySelector('img');
 console.log(img)
 console.log(img.width);
});

window.addEventListener('load',function(){
 console.log('I will run first');
 console.log('I will run second')
 const img = this.document.querySelector('img');
 console.log(img)
 console.log(img.width);
});