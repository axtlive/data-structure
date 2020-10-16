var Tree = function() {
  var Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  var root = null;

  // 辅助方法 递归调用
  var insertNode = (node, newNode) => {
    if (newNode.value > node.value) {
      if (node.right == null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    }
  };

  // 插入节点
  this.insert = value => {
    var newNode = new Node(value);
    if (root == null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  // 搜索节点
  this.search = value => {};

  // 遍历节点
  var traverse = (node, callback) => {
    if (node == null) return;
    traverse(node.left, callback);
    traverse(node.right, callback);
    callback(node.value);
  };
  this.traverse = callback => {
    traverse(root, callback);
  };

  // 删除节点
  this.remove = value => {};

  this.getRoot = () => root;
};

const print = value => {
  console.log("value-------", value);
};

var t = new Tree();
t.insert(8);
t.insert(2);
t.insert(3);
t.insert(9);
t.traverse(print);
