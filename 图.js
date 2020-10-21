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

function Graph() {
  // 存储定点
  var vertices = [];
  // 存储边
  var adjList = {};

  // 添加顶点
  this.addVertex = v => {
    vertices.push(v);
    adjList[v] = [];
  };
  // 添加边
  this.addEdge = (a, b) => {
    adjList[a].push(b);
    adjList[b].push(a);
  };

  /**
   * @description: 广度优先遍历
   * @param {*} v 元素
   * @param {Function}callback 回调
   */
  var initColor = () => {
    var color = {};
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = (v, callback) => {
    // white 未发现
    // grey 已发现未探索
    // black 已探索
    // 初始化，让所有的顶点都是白色
    var color = initColor();
    var queue = new Queue();
    queue.enqueue(v);
    while (!queue.isEmpty()) {
      var now = queue.dequeue();
      var edge = adjList[now];
      for (var i = 0; i < edge.length; i++) {
        var w = edge[i];
        if (color[w] === "white") {
          // 未发现的全部入列  并且标记为已发现
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[now] = "black";
      callback && callback(now);
    }
  };

  this.BFS = (v, callback) => {
    var d = {};
    var pred = {};
    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
    }

    var color = initColor();
    var queue = new Queue();
    queue.enqueue(v);
    while (!queue.isEmpty()) {
      var now = queue.dequeue();
      var edge = adjList[now];
      for (var i = 0; i < edge.length; i++) {
        var w = edge[i];
        if (color[w] === "white") {
          // 未发现的全部入列  并且标记为已发现
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[now] = "black";
      callback && callback(now);
    }
  };

  this.print = () => {
    var s = "\n";
    for (var i = 0; i < vertices.length; i++) {
      var topPoint = vertices[i];
      s += topPoint + "=>";
      var edge = adjList[topPoint];
      for (var j = 0; j < edge.length; j++) {
        s += edge[j];
      }
      s += "\n-----\n";
    }
    return s;
  };
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("C", "D");
g.addEdge("B", "E");
g.addEdge("F", "B");
