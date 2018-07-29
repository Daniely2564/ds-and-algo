// Best Solution    
function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
}

// Second Solution
let queue = []

const queueTime = (customers, n) => {
  let remaining = customers.slice().reverse()
  let count = 0
  
  while (queue.length || remaining.length) {
    count = count + 1
    
    // add new workers to queue if slots available
    while (queue.length < n && remaining.length) {
      queue.push(remaining.splice(-1)[0])
    }
    
    // iterate workers in queue and empty complete workers
    queue = queue.reduce((result, worker) => {
      worker -= 1
      
      if (worker > 0) {
        result.push(worker)
      }
      
      return result
    }, [])
  }
  
  return count
}

console.log(queueTime([], 1)==0);
console.log(queueTime([1,2,3,4], 1)==10);
console.log([1,3,4].shift());