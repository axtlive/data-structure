class CArray {
  constructor() {
    this.dataStore = [10, 8, 3, 4, 2, 9, 5, 7];
  }
  insertSort() {
    var temp, inner;
    for (var outer = 1; outer < this.dataStore.length; outer++) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && this.dataStore[inner - 1] >= temp) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        // console.log("内部数据", this.dataStore);
        inner--;
      }
      this.dataStore[inner] = temp;
      console.log("数据", this.dataStore);
    }
  }
}

var myNum = new CArray();
myNum.insertSort(myNum);
console.log(myNum.dataStore);
