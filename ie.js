let IE='\v'=='v';
if(IE == true ) {
	console.log('  ie  6 - 10  ');
	document.write('<h1> страница не поддерживает internet explorer! <h1>');
	document.write('<h1>  используйте современный браузер </h1>');
	document.write('<span class="browser">Firefox<a href="https://www.mozilla.org/ru/firefox/new/"><img class="browser" src="https://www.w3schools.com/browsers/pic_firefox128.png" /></a></span><span>Chrome<a href="https://www.google.ru/chrome/index.html"><img class="browser" src="https://icon-icons.com/icons2/844/PNG/512/Google_Chrome_icon-icons.com_67098.png" /></a></span><span class="browser">Opera<a href="https://www.opera.com/ru"><img class="browser" src="https://cdn1.iconfinder.com/data/icons/android-png/256/Android-Opera-Mini.png"/></a></span>');
}
if(!(window.ActiveXObject) && "ActiveXObject" in window){
	console.log('  ie11  ');
	document.write('<h1> internet explorer не поддерживается! </h1>');
	document.write('<h1>  используйте современный браузер: </h1>');
	document.write('<span>Chrome<a href="https://www.google.ru/chrome/index.html"><img class="browser" src="https://icon-icons.com/icons2/844/PNG/512/Google_Chrome_icon-icons.com_67098.png" /></a></span><span class="browser">Firefox<a href="https://www.mozilla.org/ru/firefox/new/"><img class="browser" src="https://www.w3schools.com/browsers/pic_firefox128.png" /></a></span> <span class="browser">Opera<a href="https://www.opera.com/ru"><img class="browser" src="https://cdn1.iconfinder.com/data/icons/android-png/256/Android-Opera-Mini.png"/></a></span>');
}
