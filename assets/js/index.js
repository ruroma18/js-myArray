'use strict';

class MyArray {

  constructor() {
    this.length = 0;
  }

  static isMyArray(arg) {
    return arg instanceof MyArray;
  }

  [Symbol.iterator] () {
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
    if (this.length > 0) {
      delete this[this.length - 1];
    this.length--;

    return value;
    }
    return new Error('Array is empty');
    
  };

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    };
  };

  map(callback) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this))
    };

    return newArr;
  };

  unshift(...value) {
    const numberOfValue = value.length;

    for (let i = 0; i < this.length; i++) {
      this[this.length - i] = this[this.length - (i + 1)];
    }

    for (let j = 0; j < numberOfValue; j++) {
      this[j] = value[j];
      this.length++;
    }

    return this.length;
  };

  shift() {
    const value = this[0];
    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      };
  
      this.pop();
      return value;
    }
    return new Error('Array is empty');
    
  };

  reverse() {
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      [this[i], this[this.length - 1 - i]] = [this[this.length - 1 - i], this[i]];
    };

    return this;
  };

  concat(...values) {
    const newArr = new MyArray();
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
