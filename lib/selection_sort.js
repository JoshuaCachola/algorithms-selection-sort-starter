// Try to implement swap on your own, this time.
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

}

function selectionSort(list) {
  // list  : array of items
  // n     : size of list
  //
  // for i = 1 to n - 1
  // /* set current element as minimum*/
  //    min = i
  //
  //    /* check the element to be minimum */
  //
  //    for j = i+1 to n
  //       if list[j] < list[min] then
  //          min = j;
  //       end if
  //    end for
  //
  //    /* swap the minimum element with the current element
  //       using the above swap function*/
  //    if indexMin != i  then
  //       swap list[min] and list[i]
  //    end if
  // end for

  let n = list.length;
  for (let i = 0; i < (n - 1); i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(list, min, i);
    }
  }
}

module.exports = {
  selectionSort,
  swap
};
