'use strict';

class MyArray {

  constructor() {
    this.length = 0;
  }

  [Symbol.iterator] = function () {
    let i = 0;
    let context = this;
    const returnObject = {
      next: function () {
        return {
          done: i >= context.length,
          value: context[i++]
        };
      }
    };

    return returnObject;
  }

  isMyArray(arg) {
    return arg instanceof MyArray;
  }

  push = function (...value) {
    for (let i of value) {
      this[this.length] = i;
      this.length++;
    };

    return this.length;
  };

  pop = function () {
    const value = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return value;
  };

  forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    };
  };

  map = function (callback) {
    let newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this))
    };

    return newArr;
  };

  unshift = function (value) {
    for (let i = 0; i < this.length; i++) {
      this[this.length - i] = this[this.length - (1 + i)];
    };
    this[0] = value;
    this.length++;
    return this.length;
  };

  shift = function () {
    const value = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    };

    delete this[this.length - 1];
    this.length--;
    return value;
  };

  reverse = function () {
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      [this[i], this[this.length - 1 - i]] = [this[this.length - 1 - i], this[i]];
    };

    return this;
  };

  concat = function (...value) {
    let newArr = new MyArray();
    for (let i of this) {
      newArr[newArr.length] = i;
      newArr.length++;
    };

    for (let j of value) {
      for (let b of j) {
        newArr[newArr.length] = b;
        newArr.length++;
      }
    };
    return newArr;
  };

};

const arr = new MyArray();

arr.push(1, 2213123, 'test', 12312312312);


const arr2 = new MyArray();

arr2.push(1, 2213123, 'test', 12312312312);



//пример выполнения forEach
arr.forEach(function count(val, index, arr) {
  console.log(`Item ${val} has index ${index}`);
})

//пример выполнения map

let arrMap = arr.map(function sqrt(val) {
  return val * 2;
});