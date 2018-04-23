$.getJSON(
  "https://api.fixer.io/latest?base=USD",
  function(data) {
	/*$('#today').append('сегодняшняя дата: ' + data.date);*/
	$('#usd').append(" " + data.rates.RUB);
	},
);

$.getJSON(
  "https://api.fixer.io/latest?base=EUR",
  function(data) {
	$('#eur').append(" " + data.rates.RUB);
	},
);
