let url = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new'

// const RandomOrg = require('random-org');
// let random = new RandomOrg({ apiKey: '72e6e669-50b7-4aab-950d-107d8f4275dc'});

//random.generateIntegers({
//     min: 0,
//     max: 7,
//     n: 4,
// }).then(result => {
//     let secretCode = result.random.data
//     return secretCode;
// });


// let secretCode = random.generateIntegers({
//     min: 0,
//     max: 7,
//     n: 4,
// }).then(result => result.random.data);

//console.log(random);
// const getRandomNumber = () => {
    //     return fetch(url)
    //         .then(res => res.text())
    //         .then(data => console.log(data))
    // };
    // tratar 
    // module.exports = getRandomNumber;

class GenerateNumber {
    constructor(url) {
        this.url = url,
        this.secretNumber = []; // TODO: I have to clean this data. 
    }
    
    getSecret(){
       return fetch(url)
            .then(res => res.text())
            .then(data => this.secretNumber = data);
    }
}

module.exports = GenerateNumber;
