function List() {
  this.listSize = 0; //列表元素的个数
  this.pos = 0; // 列表当前位置
  this.dataStore = []; // 初始化一个空数组来保存列表元素
  this.clear = clear; // 清空列表里所有元素
  this.find = find; // 查找元素
  this.toString = toString; //返回列表字符串的形式
  this.insert = insert; // 在现有元素后插入新元素
  this.append = append; // 在列表元素末尾增加新元素
  this.remove = remove; // 从列表中删除元素
  this.front = front; // 从列表的当前位置移动到第一个元素
  this.end = end; // 从列表的当前位置移动到最后一个位置
  this.prev = prev; // 将当前位置后移一位
  this.next = next; // 将当前位置前移一位
  this.length = length; // 列表包含元素的个数
  this.currPos = currPos; // 返回李彪当前位置
  this.moveTo = moveTo; // 将当前位置移动到指定位置
  this.getElement = getElement; // 显示当前的元素
  this.contains = contains; // 是否包含该元素
}

function append(ele) {
  this.dataStore[this.listSize++] = ele;
}

function find(ele) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == ele) {
      return i;
    }
  }
  return -1;
}

function remove(ele) {
  var foundAt = this.find(ele);
  if (foundAt > -1) {
    this.dataStore.slice(foundAt, 1);
    --this.listSize;
    return;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insert(ele, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, ele);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore.length = 0;
  this.listSize = this.pos = 0;
}

function contains(ele) {
  for (var i = 0; i < this.dataStore.length; ++1) {
    if (this.dataStore[i] == ele) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

var names = new List();
names.append("张三");
names.append("李四");
names.append("王五");

for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}
