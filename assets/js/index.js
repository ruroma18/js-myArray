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

  this.forEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };


}


MyArray.prototype = new MyArrayPrototype;

const arr = new MyArray();

arr.push(1);
arr.push(2213123); 

//пример выполнения forEach
let a = arr.forEach(function count(val, index, arr){
  console.log(`Item ${val} has index ${index}`);
}) 