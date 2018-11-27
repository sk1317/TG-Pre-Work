console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');


/*First message!
Second message!
This message will always run last...*/
