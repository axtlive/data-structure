function quickSort(list) {
  if (list.length == 0) {
    return [];
  }
  // 基准值
  var pivot = list[0];
  var lesser = [];
  var greater = [];
  for (var i = i; i < list.length; i++) {
    if (list[i] < pivot) {
      lesser.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
}
var dataStore = [10, 8, 3, 4, 2, 9, 5, 7];
console.log(quickSort(dataStore));
