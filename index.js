

document.getElementById('game__start').addEventListener('click', sayingHi);

function sayingHi(){
    console.log('im here')
   alert('Hi')
}
function startGame() {
    console.log('Am i here?');
    let input = document.querySelector('input').value;
    input = input.split('');
    let secretCode = new GenerateNumber().getSecret();
    secretCode = secretCode.secretNumber;
    let player = new Game(secretCode);
    let results = player.guess(input);
    return document.getElementById('game__results').innerHTML = results;
}
