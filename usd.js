/*
API Access Key
700beab89e2a8d3c275d5e424a656ca0
*/

const fixerapi = "http://data.fixer.io/api/latest?access_key=700beab89e2a8d3c275d5e424a656ca0&symbols=RUB,USD";

/*
fetch(fixerapi).then(function(response) {
    console.log(response.headers.get('Content-Type'));
	//application/json; Charset=UTF-8
    console.log(response.status); 		  
	//200
    console.log(response.statusText);    
	//OK
    console.log(response.type); 		
	//cors
    console.log(response.url);
});  

console.log(Math.floor(response.status / 100)); // 2
response.status  = 201
*/

fetch(fixerapi).then(
	function(response) {
      if (Math.floor(response.status / 100) !== 2) {	  
          console.log('problem. Status Code: ' + response.status);
      }else{
		  console.log('good. Status Code: ' + response.status); //200
		  response.json().then(function(data) {
			  let date = data.date;
			  let today = document.querySelector('.data')  
			  today.innerHTML = date; 
			  
			  let euro = (data.rates.RUB).toFixed(2)
			  let eur = document.querySelector('.eur')  
			  eur.innerHTML = euro; 
			  
			  let usddollar = (data.rates.RUB / data.rates.USD).toFixed(2);
			  let usd = document.querySelector('.usd')  
			  usd.innerHTML = usddollar; 
			//console.log('на дату: ' + data.date);
			//console.log('курс деревянного к еврику ' + (data.rates.RUB).toFixed(2) );
			//console.log('курс деревянного к зеленому ' + (data.rates.RUB / data.rates.USD).toFixed(2));
		  });
	  }
    }
  )
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });