function createInfiniteIterator(maxSteps) {
    let current = 1;
    let stepsTaken = 0;
  
    return {
      next: function() {
        if (stepsTaken < maxSteps) {
          stepsTaken++;
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
  
  const iterator = createInfiniteIterator(5);
  
  for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
  }
  