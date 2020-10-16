// 第一个元素和其他元素比较，最小的放第一个

class CArray {
  constructor() {
    this.dataStore = [10, 8, 3, 4, 2, 9, 5, 7];
  }
  swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  selectSort() {
    var min;
    for (var outer = 0; outer < this.dataStore.length - 2; ++outer) {
      min = outer;
      for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
        if (this.dataStore[inner] < this.dataStore[min]) {
          min = inner;
        }
      }
      this.swap(this.dataStore, outer, min);
    }
  }
}

var myNum = new CArray();
myNum.selectSort(myNum);
console.log(myNum.dataStore);
