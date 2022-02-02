function bubbleSort(arr) {
  let holder;
  for (let i=0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
      holder = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = holder;
    }
  }
  return holder ? bubbleSort(arr) : arr;
}

if (require.main === module) {
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([4, 3, 2, 1]));
}

module.exports = bubbleSort;

/**
 * 1. paraphrase
 * 
 * implement bubble sort
 * 
 * 2. tests
 * 
 * 4321
 * 
 * 3. pseudocode
 * 
 * for loop to compare el and el+1
 * use a holder var
 * by the end, if holder var has anything in it, then something's been switched.
 * => pass through function recursively again.
 * else return.
 * base cases: holder var is undef.
 * 
 * 4. code
 * 5. refactor
 * 6. optimize if time
 */
