const plantNeedsWater =
function(day) {
  if(day === 'Wednesday'){
    return true;
  } else{
    return false;
  }
};
//Not Wednesday = don't water those plants!
 console.log(plantNeedsWater('Tuesday'));

//output is 'false'
