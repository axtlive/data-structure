// 函数：函数，构造器
// this指向要构造的对象

var Stack = function() {
  var items = []; // 私有
  // this.item = []; // 共有

  // push 栈顶添加元素
  this.push = function(element) {
    items.push(element);
  };

  // pop 移除栈顶元素
  this.pop = function() {
    return items.pop();
  };

  // peek 查看栈顶元素
  this.peek = function() {
    return items[items.length - 1];
  };

  // isEmpty 检查站是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };

  // clear 清除栈
  this.clear = function() {
    items = [];
  };

  // size获取栈大小
  this.size = function() {
    return items.length;
  };

  // 获取 items
  this.getItems = function() {
    return items;
  };
};

// -----------------------------------------------------------

// 十进制 转 二进制
var tenTotwo = function(number) {
  var stack = new Stack();
  var string2 = "";
  var rest;
  while (number > 0) {
    rest = number % 2;
    stack.push(rest);
    number = Math.floor(number / 2);
  }
  while (!stack.isEmpty()) {
    string2 += stack.pop();
  }
  return string2;
};

// -----------------------------------------------------------

// 函数的调用栈
// 先完成fun1 再完成fun2
var fun1 = function() {
  return console.log("fun1 finish");
};
var fun2 = function() {
  fun1();
  return console.log("fun2 finish");
};
fun2();

// -----------------------------------------------------------

// 栈内存溢出
var app = function() {
  app();
};
