'use strict';

class MyArray {

  constructor() {
    this.length = 0;
  }

  static isMyArray(arg) {
    return arg instanceof MyArray;
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

  push(...value) {
    for (let i of value) {
      this[this.length] = i;
      this.length++;
    };

    return this.length;
  };

  pop() {
    const value = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return value;
  };

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    };
  };

  map(callback) {
    let newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this))
    };

    return newArr;
  };

  unshift(...value) {
    debugger;
    let numberOfValue = value.length;

    for (let i = 0; i < this.length; i++) {
      this[this.length + 1 - i] = this[this.length - (i + 1)];
    }

    for (let j = 0; j < numberOfValue; j++) {
      this[j] = value[j];
      this.length++;
    }

    return this.length;
  };

  shift() {
    const value = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    };

    this.pop();
    return value;
  };

  reverse() {
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      [this[i], this[this.length - 1 - i]] = [this[this.length - 1 - i], this[i]];
    };

    return this;
  };

  concat(...values) {
    let newArr = new MyArray();
    for (let i of this) {
      newArr.push(i);
    };

    for (let value of values) {
      if (MyArray.isMyArray(value)) {
        newArr.push(...value);
      } else {
        newArr.push(value);
      };
    };
    return newArr;
  };

};



// check functions

// const arr = new MyArray();
// arr.push(1, 2213123, 'test', 12312312312);


// const arr2 = new MyArray();
// arr2.push(2, 3, 'hello', 4);

// check isMyArray
// console.log(isMyArray(arr));


//пример выполнения forEach
// arr.forEach(function count(val, index, arr) {
//   console.log(`Item ${val} has index ${index}`);
// })

//пример выполнения map

// let arrMap = arr.map(function sqrt(val) {
//   return val * 2;
// });