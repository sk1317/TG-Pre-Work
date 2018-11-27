const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);


/* Output:
[ 'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
[ 'bananas', 'coffee beans', 'brown rice' ]
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
4*/
