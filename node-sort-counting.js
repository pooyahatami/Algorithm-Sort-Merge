 /*
 * Counting sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n+k) comparisons, swaps
 * Best-case performance	O(n+k) comparisons, O(1) swaps
 * Average performance	О(n+k) comparisons, swaps
 * Worst-case space complexity
 */
 
 exports.countingSort = function(inputArray,maxrange ) {
  if(!inputArray) return -1;
  if(inputArray.length === undefined) return -1;

  return exports.cs(inputArray,maxrange);
}

exports.cs = function(arr,maxrange) {

        var n = arr.length;
        ++maxrange;
        
        // The output character array that will have sorted arr
        var output = new ArrayBuffer();
//      var output = [];

        // Create a count array to store count of inidividul
        // characters and initialize count array as 0
        var count = new ArrayBuffer(maxrange);
//      var count =  [maxrange];
  
        for (i=0; i<maxrange; ++i)
            count[i] = 0;
        // store count of each character
        for (i=0; i<n; ++i)
            ++count[arr[i]];
        
        // Change count[i] so that count[i] now contains actual
        // position of this character in output array
        for (i=1; i<=maxrange; ++i)
            count[i] += count[i-1];

        // Build the output character array
        for (i = 0; i<n; ++i)
        {
            output[count[arr[i]]-1] = arr[i];
            --count[arr[i]];
        }
 
        // Copy the output array to arr, so that arr now
        // contains sorted characters
        for (i = 0; i<n; ++i)
            arr[i] = output[i];

      return arr;
   };
   