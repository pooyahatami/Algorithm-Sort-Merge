/*
 * Merge sort algorithm ! 
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	O(n log n) 
 * Best-case performance	O(n log n) typical, O(n) natural variant
 * Average performance	O(n log n) 
 * Worst-case space complexity О(n) total, O(n) auxiliary
 *   where n is the size of the input array.
 *   input array elements could be negative/positive and also integer or float .
 *   Note: there are another kind of Merg sort by the name of 3-way Merge Sort . 
 *         Merge sort involves recursively splitting the array into 2 parts, sorting and finally merging them. 
 *         A variant of merge sort is called 3-way merge sort where instead of splitting the array into 2 parts 
 *         we split it into 3 parts.
 *         Merge sort recursively breaks down the arrays to subarrays of size half. Similarly, 
 *         3-way Merge sort breaks down the arrays to subarrays of size one third.
 *
 * Author: Pooya Hatami
 */

var nodesort = require('./node-sort-merge');
var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 

var arrin00 = [20, 8 , -11, 12, 22 , 9 , 10 ];
var arrin01 = [20, 8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, 8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , 390 , 1000 ];
var arrin04 = ['g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'];
var arrin05 = [1, 3, 7, 25, 12, 9, 8,
                      121, 221, 10, 18, 29, 49];
var arrin06 = [1, 3, -7, 25, 12, 9, 8,
                      121, 221, -10, 18, 29, 49];
var arrin07 = [1, 3, 7000000000000000000, 25, 12, 9, 8,
                      121, 221, 100000000000000000000000000 , 18, 290000000000000000000, 49];
var arrin08 = [1, 3, 75432, 25, 12, 9, 8,
                      121, 221, 976562 , 18, 299999, 49];
var arrin09 = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin10 = [1,342, 14,293 , 0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin11 = [5, 8 , 11, 12, 2 , 9 , 10 , 4 , 11, 10, 12, 7, 9 ];
var arrin12 = "";

function solveSorting(inputArray) {
    var arr_original = inputArray.toString() ;
    var sortedArray = inputArray;

    nodesort(inputArray, displaymode,  function(err,sortRef) {
        if (err) {
	         console.log(err);
	                }
	      else {
           var result = sortRef.mergeSort(inputArray);
	         console.log("Success attempt to sort array \r\n \t ["+arr_original+" ] \r\n and result is : \r\n \t [ "
                + result + " ]" );
  
	      sortedArray = result;
	            }
	      console.log("----------------------------------------------------------"); 
    });
    
    return sortedArray;
};

solveSorting(arrin09);
solveSorting(arrin00);
solveSorting(arrin10);
solveSorting(arrin11);
solveSorting(arrin12);
