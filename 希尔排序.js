// 第一个元素和其他元素比较，最小的放第一个

class CArray {
  constructor() {
    this.dataStore = [10, 8, 3, 4, 2, 9, 5, 7, 35, 47, 20];
    this.gaps = [5, 3, 1];
  }
  swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  dynamicSort() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (var i = h; i < N; i++) {
        for (
          var j = i;
          j >= h && this.dataStore[j] < this.dataStore[j - h];
          j = j - h
        ) {
          this.swap(this.dataStore, j, j - h);
        }
      }
    }
  }
  shellSort() {
    for (var g = 0; g < this.gaps.length; g++) {
      for (var i = this.gaps[g]; i < this.dataStore.length; i++) {
        var temp = this.dataStore[i];
        for (
          var j = i;
          j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
          j -= this.gaps[g]
        ) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
      }
      console.log("调换后", this.dataStore);
    }
  }
}

var myNum = new CArray();
myNum.shellSort(myNum);
console.log(myNum.dataStore);
