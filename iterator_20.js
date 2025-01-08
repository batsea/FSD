function IterableList(numbers) {
    this.numbers = numbers;
    this.index = 0;
  
    this[Symbol.iterator] = () => {
      this.index = 0; 
      return this;
    };
  
    this.next = () => {
      if (this.index < this.numbers.length) {
        return { value: this.numbers[this.index++], done: false };
      }
      return { done: true };
    };
  
    this.reset = () => {
      this.index = 0;
    };
  }
  
  const iterable = new IterableList([1, 2, 3]);
  
  for (const num of iterable) {
    console.log(num);
  }
  
  iterable.reset();
  for (const num of iterable) {
    console.log(num);
  }
  