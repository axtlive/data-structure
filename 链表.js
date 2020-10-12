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
  this.getHead = function() {
    return head;
  };
};

var l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);

l.insert(1, 10);
