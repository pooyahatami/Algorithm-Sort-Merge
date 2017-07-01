[![Build Status](https://secure.travis-ci.org/soldair/node-binarysearch.png)](https://github.com/pooyahatami/Algorithm-Sort-Counting/)
# Algorithm-Sort-Merge

## about Merge Sort 
Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. 

```javascript
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
 ```
 
See following C implementation for details.

```javascript
MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = (l+r)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
```

## Ruls :
```js
var nodesort = require('./node-sort-merge');
nodesort(inputArray, function(err,sortRef) {
        if (err) {
            // TODO error handeling 
            }
	      else {
           var result = sortRef.mergeSort(inputArray);
           // TODO output 
	            }
    });
```
 * Sort Array of integers / float .
 * Array's element could be negative and positive .
 * Returns error mesage if not found valid input.

## example
```js
var nodesort = require('./node-sort-merge');

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

    nodesort(inputArray, function(err,sortRef) {
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
```


Following is C implementation of counting sort.
```C
C/C++JavaPython
// C Program for counting sort
#include <stdio.h>
#include <string.h>
#define RANGE 255
 
// The main function that sort the given string arr[] in
// alphabatical order
void countSort(char arr[])
{
    // The output character array that will have sorted arr
    char output[strlen(arr)];
 
    // Create a count array to store count of inidividul
    // characters and initialize count array as 0
    int count[RANGE + 1], i;
    memset(count, 0, sizeof(count));
 
    // Store count of each character
    for(i = 0; arr[i]; ++i)
        ++count[arr[i]];
 
    // Change count[i] so that count[i] now contains actual
    // position of this character in output array
    for (i = 1; i <= RANGE; ++i)
        count[i] += count[i-1];
 
    // Build the output character array
    for (i = 0; arr[i]; ++i)
    {
        output[count[arr[i]]-1] = arr[i];
        --count[arr[i]];
    }
 
    // Copy the output array to arr, so that arr now
    // contains sorted characters
    for (i = 0; arr[i]; ++i)
        arr[i] = output[i];
}
 
// Driver program to test above function
int main()
{
    char arr[] = "geeksforgeeks";//"applepp";
 
    countSort(arr);
 
    printf("Sorted character array is %s\n", arr);
    return 0;
}
```

The following diagram from wikipedia shows the complete merge sort process for an example array {38, 27, 43, 3, 9, 82, 10}. If we take a closer look at the diagram, we can see that the array is recursively divided in two halves till the size becomes 1. Once the size becomes 1, the merge processes comes into action and starts merging arrays back till the complete array is merged.

Merge-Sort

Following is Java implementation of counting sort.
```java
// Java implementation of Counting Sort
class CountingSort
{
    void sort(char arr[])
    {
        int n = arr.length;
 
        // The output character array that will have sorted arr
        char output[] = new char[n];
 
        // Create a count array to store count of inidividul
        // characters and initialize count array as 0
        int count[] = new int[256];
        for (int i=0; i<256; ++i)
            count[i] = 0;
 
        // store count of each character
        for (int i=0; i<n; ++i)
            ++count[arr[i]];
 
        // Change count[i] so that count[i] now contains actual
        // position of this character in output array
        for (int i=1; i<=255; ++i)
            count[i] += count[i-1];
 
        // Build the output character array
        for (int i = 0; i<n; ++i)
        {
            output[count[arr[i]]-1] = arr[i];
            --count[arr[i]];
        }
 
        // Copy the output array to arr, so that arr now
        // contains sorted characters
        for (int i = 0; i<n; ++i)
            arr[i] = output[i];
    }
 
    // Driver method
    public static void main(String args[])
    {
        CountingSort ob = new CountingSort();
        char arr[] = {'g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'
                     };
 
        ob.sort(arr);
 
        System.out.print("Sorted character array is ");
        for (int i=0; i<arr.length; ++i)
            System.out.print(arr[i]);
    }
}
/*This code is contributed by Rajat Mishra */
```
Following is Python implementation of counting sort.
```python
# Python program for counting sort
 
# The main function that sort the given string arr[] in 
# alphabetical order
def countSort(arr):
 
    # The output character array that will have sorted arr
    output = [0 for i in range(256)]
 
    # Create a count array to store count of inidividul
    # characters and initialize count array as 0
    count = [0 for i in range(256)]
 
    # For storing the resulting answer since the 
    # string is immutable
    ans = ["" for _ in arr]
 
    # Store count of each character
    for i in arr:
        count[ord(i)] += 1
 
    # Change count[i] so that count[i] now contains actual
    # position of this character in output array
    for i in range(256):
        count[i] += count[i-1]
 
    # Build the output character array
    for i in range(len(arr)):
        output[count[ord(arr[i])]-1] = arr[i]
        count[ord(arr[i])] -= 1
 
    # Copy the output array to arr, so that arr now
    # contains sorted characters
    for i in range(len(arr)):
        ans[i] = output[i]
    return ans 
 
# Driver program to test above function
arr = "geeksforgeeks"
ans = countSort(arr)
print "Sorted character array is %s"  %("".join(ans))
 
# This code is contributed by Nikhil Kumar Singh
```
Output:
```Sorted character array is eeeefggkkorss```

Other Sorting Algorithms :
=====
 * Selection Sort
 * Bubble Sort
 * [Insertion Sort](https://github.com/pooyahatami/Algorithm-Sort-Insertion)
 * Merge Sort
 * Heap Sort
 * QuickSort
 * [Counting Sort](https://github.com/pooyahatami/Algorithm-Sort-Counting)
 * Bucket Sort
 * ShellSort

## References:
 * https://en.wikipedia.org/wiki/Counting_sort
 * http://www.geeksforgeeks.org/counting-sort
