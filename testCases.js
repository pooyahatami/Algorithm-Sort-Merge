 /*
 * Counting sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n+k) comparisons, swaps
 * Best-case performance	O(n+k) comparisons, O(1) swaps
 * Average performance	О(n+k) comparisons, swaps
 * Worst-case space complexity
 */

var rectcs = require('./node-sort-counting');

var arrin01 = [20, 8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, 8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , 390 , 1000 ];
var arrin04 = ['g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'];
var arrin05 = [1, 3, 7, 25, 12, 9, 8,
                      121, 221, 10, 18, 29, 49];


function solveIS(arr,range) {
    var arr_original = arr.toString() ;
    var result = rectcs.countingSort(arr,range);
    if (result==-1){
    console.log("Fail attempt to sort array ["+arr_original+" ] by Insertion Sort " );
    } else {
    console.log("Success attempt to sort array ["+arr_original+" ] and result is : [ "
                + result + " ]" );
    }
   
   console.log("----------------------------------------------------------");     
}

solveIS(arrin01,1000);
solveIS(arrin05,256);
solveIS(arrin03,1120);

