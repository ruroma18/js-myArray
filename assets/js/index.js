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
    const value = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return value;
  };

  
}


MyArray.prototype = new MyArrayPrototype;

const arr = new MyArray();

