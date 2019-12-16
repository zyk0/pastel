/*
Fetch() - modern replacement for XMLHttpRequest
use in world  - 93.72% 
https://caniuse.com/#search=fetch
*/

var coin = document.getElementById('bitcoin');
//console.log(coin);
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(function(response){
    if(response.status !==200) {
      return Promise.reject(new Error(response.statusText))
    }
    else{
      return Promise.resolve(response)
    }
  })
  
  .then( function(response) {
        //console.log('status: '  + response.status); // 200
       //console.log('URL: ' 	  + response.url);   // url
      //console.log('type: '      + response.type);   //cors
	  console.info("%c : github.com/zyk0", "background: #de5d83; color: #ffffff"); //my github
	  return response.json(); //  json
    })
 
  .then( function(data){
	 let parsing =  parseInt((data.bpi.USD.rate_float)*1)/1 /* + data.bpi.USD.symbol*/; 
	 // parseInt() принимает строку и возвращает целое число
	 //console.log('parsing: ' + parsing); //parsing: 9359
	 let ratecoin =  coin.innerHTML = parsing;
	 return ratecoin;
	
   // data.bpi.USD.rate_float  - "rate_float": 8648.71
  //  parseInt(( number )*1)/1  //укорачиваем число с десятичными до целого числа
 //   data.bpi.USD.symbol; //символ $
//    'курс биткоина на '+ data.time.updated //дата "Feb 12, 2018 09:00:00 UTC", обрезать!
})
  .catch(function(err) { 
    console.log('ошибка!!');
	console.log(err);
  });	