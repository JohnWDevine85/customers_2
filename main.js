// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
// (function () {
//
  // 'use strict';

// const url = 'https://randomuser.me/api?results=12';

let customers = document.querySelector('.customers'); // select customers div
let newrando = document.createElement('div'); // create div


// fetch('https://randomuser.me/api/?results=12')
fetch('https://randomuser.me/api/?results=12')

.then(function(response){
  return response.json();
})
.then(function(response) {

for(i=0;i<=array.length;i++)
    newrando.textContent = results.i


console.log(newrando);})
