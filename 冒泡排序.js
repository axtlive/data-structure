// 冒泡排序需要两个循环
// 菲波那切数列  复杂度 n*n

var CArray = function() {
  this.dataStore = [10, 8, 3, 4, 2, 9, 5, 7];

  this.swap = (arr, index1, index2) => {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };

  this.bubbleSort = () => {
    var data = this.dataStore;
    for (var outer = data.length; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer - 1; inner++) {
        if (data[inner] > data[inner + 1]) {
          this.swap(this.dataStore, inner, inner + 1);
        }
      }
    }
  };
};

var myNum = new CArray();
myNum.bubbleSort(myNum);
console.log(myNum.dataStore);
