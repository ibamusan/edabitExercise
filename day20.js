// Write a function to reverse an array.

function reArray(arr){
  return arr.reverse();
}

console.log(reArray([1,2,3,4,5,6]));


//Create a function that searches for the index of a given item in an array. 
// If the item is present, it should return the index, otherwise, it should return -1.

function findSindex(arr, n){
  let y = arr.indexOf(n)

  if (y != -1){
    return y;
  }else {
    return -1;
  }
}

console.log(findSindex([1,2,3,4,5], 4));




