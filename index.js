function hasTargetSum(array, target) {
  // Write your algorithm here

  for(i = 0; i < array.length; i++) {
    for(j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true 
      }
    }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here

  O(n)

*/

/* 
  Add your pseudocode here

iterate through the elements by adding one element with another
  if any pair of numbers in the array have a sum of the target number
    return true
  else
    return false

*/

/*
  Add written explanation of your solution here

The hasTargetSum() function iterates through the given array searching for any pair of elements
  that equal the sum of the given target number. Starting with the first for loop, setting the first
  element in the array to the variable i (0), as long as i is less than the length of the array
  the function will increment to the next element in the array. Creating the second for loop allows
  the function to have a second variable to use to add with the first. The second for loop is
  similar to the first for loop, with the only difference being the variable (j = i + 1), which sets
  j to the second element. Iterating through the array, if i + j === the target number at any time,
  the statement will return true. If no pair of the elements within the array have the sum of the
  given target number the function will return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([4, 17, 22, 29, 11, 6], 40))

  console.log("")

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 7, 19, 25, 12], 15));

console.log("")

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
