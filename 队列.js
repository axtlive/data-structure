// 队列
var Queue = function() {
  var items = [];
  // 入列
  this.enqueue = function(element) {
    items.push(element);
  };
  // 出列
  this.dequeue = function() {
    return items.shift();
  };
  // 查看队列头
  this.front = function() {
    return items[0];
  };
  // 或缺items
  this.getItems = function() {
    return items;
  };

  // isEmpty 检查队列是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };

  // size获取队列大小
  this.size = function() {
    return items.length;
  };
};

// -----------------------------------------------------------

// 击鼓传花
// 玩家列表
var names = ["a", "b", "c", "d", "e", "f"];
// 游戏规则 一直传递 直到剩最后一名玩家
var number = 3;
// 代码实现
var transmitFlower = function(names, number) {
  var q = new Queue();
  for (var i = 0; i < names.length; i++) {
    q.enqueue(names[i]);
  }
  // 循环队列
  while (q.size() > 1) {
    for (var i = 0; i < number - 1; i++) {
      q.enqueue(q.dequeue());
    }
    eliminate = q.dequeue();
    console.log("被淘汰的是" + eliminate);
  }
  return q.dequeue();
};

// -----------------------------------------------------------

// 队列 ---> 优先队列
// 举例：坐飞机  ---> 会员 VIP 头等舱 有优先权 priority
// var obj = {
//   name: '小黑',
//   priority: 3
// }

// 优先队列代码实现
var PriorityQueue = function() {
  var items = [];
  // 辅助类
  var QueueItem = function(element, priority) {
    this.element = element;
    this.priority = priority;
  };
  // 入列
  this.enqueue = function(element, priority) {
    var queueItem = new QueueItem(element, priority);
    var addSuccess = false;
    for (var i = 0; i < items.length; i++) {
      if (queueItem.priority > items[i].priority) {
        items.splice(i, 0, queueItem);
        addSuccess = true;
        break;
      }
    }
    if (!addSuccess) {
      items.push(queueItem);
    }
  };
  // 出列
  this.dequeue = function() {
    return items.shift();
  };
  // 查看队列头
  this.front = function() {
    return items[0];
  };
  // 获取items
  this.getItems = function() {
    return items;
  };
};
