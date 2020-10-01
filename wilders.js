const chalk = require('chalk');
const myColleagues = ["Thibault", "Jean", "Antoine", "Thomas"];
let colors = ["red", "blue"];

for(let i=0; myColleagues.lenght; i++){
    let currentColorIndex = i%2;
    let currentColor = colors[currentColorIndex];
    let colorize = chalk[currentColor];
    console.log(colorize(myColleagues[i]));
};



