'use strict';

function MyArray() {
  this.length = 0;
};

function isMyArray(arg) {
  return arg instanceof MyArray;
}

function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;

    return this.length;
  };

  this.pop = function () {
    const value = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return value;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.map = function (callback) {
    let newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this))
    }
    return newArr;
  };

  this.unshift = function (value) {
    for (let i = 0; i < this.length; i++) {
      this[this.length - i] = this[this.length - (1 + i)];
      console.log(this);
    }
    this[0] = value;
    this.length++;
    return this.length;
  };

  this.shift = function () {
    const value = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return value;
  };

  this.reverse = function () {
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      [this[i], this[this.length - 1 - i]] = [this[this.length - 1 - i], this[i]];
    }
    return this;
  };

}


MyArray.prototype = new MyArrayPrototype;

const arr = new this.MyArray();

arr.push(1);
arr.push(2213123);
arr.push('test');
arr.push(12312312312);
arr.push('ololo');

//пример выполнения forEach
let a = arr.forEach(function count(val, index, arr) {
  console.log(`Item ${val} has index ${index}`);
})

//пример выполнения map

let b = arr.map(function sqrt(val) {
  return val * 2;
});