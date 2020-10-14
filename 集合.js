var Set2 = function() {
  var items = {};

  // has 检查元素是否存在 return boolean
  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  // 添加元素 且不重复 已存在就不添加
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return value;
    }
    return false;
  };

  // 移除元素
  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  // 清空集合
  this.clear = function() {
    items = {};
  };

  // 长度
  this.size = function() {
    // 遍历集合即可
    // var count = 0;
    // for (var i in items) {
    //   count ++;
    // }
    // return count;

    // 用es6的 Object.keys()
    return Object.keys(items).length;
  };

  // 获取集合的值
  this.value = function() {
    var values = [];
    for (var i in items) {
      if (items.hasOwnProperty(i)) {
        values.push(items[i]);
      }
    }
    return values;
  };

  // 并集
  this.union = function(otherSet) {
    var resultSet = new Set2();
    // 把自己的值提取出来
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
      resultSet.add(arr[i]);
    }
    // 把另一个集合的值取出来
    arr = otherSet.value();
    for (var i = 0; i < arr.length; i++) {
      resultSet.add(arr[i]);
    }
    return resultSet;
  };

  // 交集
  this.intersection = function(otherSet) {
    var resultSet = new Set2();
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
      if (otherSet.has(arr[i])) {
        resultSet.add(arr[i]);
      }
    }
    return resultSet;
  };

  // 差集
  this.difference = function(otherSet) {
    var resultSet = new Set2();
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
      if (!otherSet.has(arr[i])) {
        resultSet.add(arr[i]);
      }
    }
    return resultSet;
  };

  // 获取整个集合
  this.getItems = function() {
    return items;
  };
};

var s = new Set2();
s.add(1);
s.add(2);
s.add(3);

var b = new Set2();
b.add(2);
b.add(3);
b.add(4);
