const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  node = null;
  root() {
    return this.node;
  }

  add(data) {
    if (!this.node) {
      this.node = new Node(data);
      return;
    }
    let cur = this.node;
    while (cur) {
      if (cur.data > data && cur.left == null) {
        cur.left = new Node(data);
        return;
      } else if (cur.data < data && cur.right == null) {
        cur.right = new Node(data);
        return;
      }
      if (cur.data > data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
  }

  has(data) {
    if (this.find(data) === null) return false;
    else return true;
  }

  find(data) {
    let cur = this.node;
    while (cur) {
      if (data > cur.data) {
        cur = cur.right;
      } else if (data < cur.data) {
        cur = cur.left;
      } else if (data == cur.data) {
        return cur;
      }
    }
    return null;
  }

  remove(data) {
    if (this.has(data)) {
      this.node = removeWithin(this.node, data);
      function removeWithin(node, data) {
        if (node.data == data) {
          if (node.left == null && node.right == null) {
            return null;
          } else if (node.left == null) {
            node = node.right;
            return node;
          } else if (node.right == null) {
            node = node.left;
            return node;
          } else {
            if (node.right.left == null) {
              node.data = node.right.data;
              node.right = node.right.right;
              return node;
            }
            let rem = minLeft(node.right);
            node = removeWithin(node, rem.data);
            node.data = rem.data;
            function minLeft(node) {
              while (node.left) {
                node = node.left;
              }
              return node;
            }
            return node;
          }
        }
        if (node.data < data) {
          node.right = removeWithin(node.right, data);
          return node;
        } else {
          node.left = removeWithin(node.left, data);
          return node;
        }
      }
    }
  }

  min() {
    let cur = this.node;
    while (cur.left) {
      cur = cur.left;
    }
    return cur.data;
  }

  max() {
    let cur = this.node;
    while (cur.right) {
      cur = cur.right;
    }
    return cur.data;
  }
};