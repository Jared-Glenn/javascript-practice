// Code adapted from Sololearn lessons on 6/28/2023.

let scores = [68,95,54,84,77,75,63,74,69,80,71,63]

//your code goes here
let count = 0;
for (score of scores){
    if (score >= 70){
        count += 1;
    }
}

console.log(count);
