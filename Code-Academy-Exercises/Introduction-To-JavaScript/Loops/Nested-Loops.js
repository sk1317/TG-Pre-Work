// Write your code below
let bobsFollowers = ['Hashem', 'Ariel', 'Nassir','Rula'];
let tinasFollowers = ['Hashem','Rula', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
     console.log(mutualFollowers); mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
//Hashem and Rula were mutual friends but on the console.log only Hashem was printed
