// Adapted from an exercise on Sololearn on 6/29/2023

let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

//your code goes here
const total = Object.assign({}, basic, advanced)

for(let ex in total) {
    console.log(total[ex])
};
