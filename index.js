// https://github.com/willfrew/node-random-org
// https://api.random.org/json-rpc/2/source-code
// var RandomOrg = require('random-org');

// var random = new RandomOrg({ apiKey: '72e6e669-50b7-4aab-950d-107d8f4275dc' });
// random.generateIntegers({ min: 0, max: 7, n: 4 })
//   .then(function(result) {
//     console.log(result.random.data); // [55, 3]
//   });



const URL = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new'
const main = document.getElementById('main');
main.innerHTML = '<p>Loding...</p>' 

var values = () => {
    return fetch(URL)
        .then(res => res.text())
        .then(data => console.log(data))
};
// tratar 
values();
