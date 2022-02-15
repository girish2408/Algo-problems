function twoNumberSum(array, targetSum) {
    // Write your code here.
      const arr = [];
      if(array.length > 0)
          for(const el in array) {
              let diff = (targetSum - array[el]) !== 0 ? targetSum - array[el] : 0;
              const result = array.slice(parseInt(el, 0) + 1, array.length).find((find) => diff === find)
              if(!isNaN(result)) {
                  arr.push(array[el],result);
                  return arr;
              }
          }
      return arr;
  }


  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Positive numbers scenario target value 5   5 - 2 = 3 find 3
// Positive numbers scenario target value 5   5 - 10 = -5 find -5
// Positive numbers scenario target value 5   5 - 0 = 5 find 0
// Positive numbers scenario target value 5   5 - 1 = 4 find 4



// Negative numbers scenario target value -5   -5 + 2 = -3 find -3
// Negative numbers scenario target value -5   -5 + 10 = 5 find -5
// Negative numbers scenario target value -5   -5 + 0 = -5 find 0
// Negative numbers scenario target value -5   -5 + 1 = -4 find -4

 