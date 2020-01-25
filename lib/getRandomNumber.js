
// const getRandomNumber = () => {
    let url = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new'
//     return fetch(url)
//         .then(res => res.text())
//         .then(data => console.log(data))
// };
// tratar 
// module.exports = getRandomNumber;

class GenerateNumber {
    constructor(url) {
        this.url = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new',
        this.secretNumber = '';
    }
    getSecret(){
       fetch(url)
            .then(res => res.text())
            .then(data => this.secretNumber = data);
    }
    displaySecret() {
        this.secretNumber.split(' ');
    }
}

let newNumber = new GenerateNumber;

console.log(newNumber)