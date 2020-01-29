//import JS dicitonary 

//Make list of dice to be rolled
const diceList = [
    'rifobx', 'ifehey', 'denows', 'utoknd',
    'hmsrao', 'lupets', 'acitoa', 'ylgkue',
    'Qbmjoa', 'ehispn', 'vetign', 'baliyt',
    'exavnd', 'ralesc', 'uwilrg', 'pacemd'
    ];
//create function to roll dice 

function rollDice(array) {
//select random die
let randomDie = array[Math.floor(Math.random() * 16)];
console.log(randomDie);

//randomly select letter on die to be displayed
let randomLetter = randomDie[Math.floor(Math.random() * 6)];
console.log(randomLetter)
// if Q add u

}
console.log(rollDice(diceList));
//create a function to output the location of the button
// and match with each random die with its displaying letter

//create board locations with matching buttons from the 
