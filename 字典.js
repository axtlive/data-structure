// dictionary 字典
// 键值对

var Dictionary = function() {
  var items = {};

  this.has = function(key) {
    // return items.hasOwnProperty(key)
    return key in items;
  };

  this.set = function(key, value) {
    items[key] = value;
  };

  this.delete = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function(key) {
    if (this.has(key)) {
      return items[key];
    }
    return undefined;
  };

  this.keys = function() {
    return Object.keys(items);
  };

  this.getItems = () => items;
};

// 哈希表 散列表
var hashTable = function() {
  var items = [];

  // 散列函数
  // key -> number -> items[number]
  // ASCII码  charCodeAt a -> 97
  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  };

  var djb2HashCode = key => {
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
      hash = hash * 33 + key[i].charCodeAt();
    }
    return hash % 1013;
  };

  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    console.log(position + "-" + value);
    items[position] = value;
  };

  this.remove = function(key) {
    items[loseloseHashCode(key)] = undefined;
  };

  this.get = function(key) {
    return items[loseloseHashCode(key)];
  };

  this.getItems = () => items;
};

var s = new hashTable();
s.put("Donnie", "axtlive@qq.com");
s.put("Ana", "a@qq.com");

// 链表
var LinkedList = function() {
  // 链表头 Object null
  var head = null;

  // 链表长度
  var length = 0;

  // 辅助类： 节点
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  // 链表尾部添加元素
  this.append = function(element) {
    var node = new Node(element);
    if (head == null) {
      head = node;
    } else {
      var current = head;
      while (current.next) {
        current = current.next;
      }
      // 当while循环完成后 current已经表示链表的最后一项了
      current.next = node;
    }
    length++;
  };

  // 在链表的某个位置添加元素
  this.insert = function(position, element) {
    if (position > -1 && position < length) {
      var node = new Node(element);
      if (position == 0) {
        var current = head;
        head = node;
        head.next = current;
      } else {
        var index = 0;
        var current = head;
        var previous = null;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.next = current;
      }
      length++;
    }
  };

  // 移除链表某个位置的节点
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      if (position == 0) {
        var current = head;
        head = current.next;
      } else {
        var current = head;
        var previous = null;
        var index = 0;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        // 跳出循环时 index == position
        previous.next = current.next;
      }
      length--;
      return current;
    }
    return null;
  };

  // 返回节点的位置
  this.indexOf = function(element) {
    var current = head;
    var index = 0;
    while (current) {
      if (current.element == element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };

  // 移除某个节点
  this.remove = function(element) {
    return this.removeAt(this.indexOf(element));
  };

  this.isEmpty = function() {
    return length == 0;
  };

  this.size = function() {
    return length;
  };

  // 获取链表头
  this.getHead = () => head;
};

// 分离链接
// 1. 使用散列表快速定位到某一链表
// 2. 用线性查找 对比key 做精确查找
var HashTable_L = function() {
  var table = [];

  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  };

  var Node = function(key, value) {
    this.key = key;
    this.value = value;
  };

  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    if (table[position]) {
      table[position].append(new Node(key, value));
    } else {
      table[position] = new LinkedList();
      table[position].append(new Node(key, value));
    }
  };

  this.get = key => {
    var position = loseloseHashCode(key);
    if (table[position]) {
      var current = table[position].getHead();
      while (current) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  };

  this.remove = key => {
    var position = loseloseHashCode(key);
    if (table[position]) {
      var current = table[position].getHead();
      while (current) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  };

  this.getTable = () => table;
};
var b = new HashTable_L();
b.put("Donnie", "axtlive@qq.com");
b.put("Ana", "a@qq.com");

// 线性探查
// 如果存在就一个一个向下
var HashTable_X = function() {
  var table = [];

  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  };

  var Node = function(key, value) {
    this.key = key;
    this.value = value;
  };

  this.put = (key, value) => {
    var position = loseloseHashCode(key);
    if (table[position] === undefined) {
      table[position] = new Node(key, value);
    } else {
      var index = position + 1;
      while (table[index] !== undefined) {
        index++;
      }
      table[index] = new Node(key, value);
    }
  };

  this.get = key => {
    var position = loseloseHashCode(key);
    while (table[position].key !== key) {
      position++;
    }
    return table[position];
  };

  this.getTable = () => table;
};

var c = new HashTable_X();
c.put("Donnie", "axtlive@qq.com");
c.put("Ana", "a@qq.com");
