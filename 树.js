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
    callback(node.value);

    traverse(node.left, callback);
    traverse(node.right, callback);
  };
  this.traverse = callback => {
    traverse(root, callback);
  };

  // 最小值
  var min = node => {
    if (node == null) return null;
    while (node && node.left) {
      node = node.left;
    }
    return node.value;
  };
  this.min = () => {
    return min(root);
  };

  // 最大值
  var max = node => {
    if (node == null) return null;
    while (node && node.right) {
      node = node.right;
    }
    return node.value;
  };
  this.max = () => {
    return max(root);
  };

  // 移除节点
  var findMinNode = node => {
    if (node == null) return null;
    while (node && node.left) {
      node = node.left;
    }
    return node;
  };
  var removeNode = (node, value) => {
    if (node == null) return null;
    if (value > node.value) {
      // 继续向右查找
      node.right = removeNode(node.right, value);
      return node;
    } else if (value < node.value) {
      // 向左查找
      node.left = removeNode(node.left, value);
      return node;
    } else {
      // value == node.value;
      // 执行删除过程
      if (node.left == null && node.right == null) {
        // 叶节点条件
        node = null;
        return node;
      }
      // 只有一个子节点的条件
      if (node.left == null && node.right) {
        return node.right;
      } else if (node.right == null && node.left) {
        return node.left;
      }
      // 有两个子节点的条件
      var aux = findMinNode(node.right);
      node.value = aux.value;
      node.right = removeNode(node.right, aux.value);
      return node;
    }
  };
  this.remove = value => {
    root = removeNode(root, value);
  };

  this.getRoot = () => root;
};

const print = value => {
  console.log("value-------", value);
};

var t = new Tree();
t.insert(11);
t.insert(8);
t.insert(4);
t.insert(9);
t.insert(3);
t.insert(5);
t.insert(10);

// t.insert(8);
// t.insert(2);
// t.insert(3);
// t.insert(9);

t.traverse(print);
