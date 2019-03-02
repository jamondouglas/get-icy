var Promise = require('bluebird');
var R = require('ramda');
var fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};
// fetch.Promise = Promise

// make a request
var getStations = function(){
	// makes request and returns a promise
	return fetch('https://api.voltaapi.com/v1/stations',
{
  method: 'GET',

  headers: headers
});
};

// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));

getStations()
	.then(function(res){
		return res.json();
	}).then(function(body){
		console.log(body)
	})
	.catch(function(err){
		return err;
	});



// fetch('https://api.voltaapi.com/v1/stations',
// {
//   method: 'GET',

//   headers: headers
// })
// .then(function(res) {
//     return res.json();
// }).then(function(body) {
//     console.log(body);
// });