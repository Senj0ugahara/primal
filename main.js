function primeNumbers(num) {
  const arr = [];
  for (let i = 2; i < num; i++) {
    let flag = true;

    for (let x = 2; x < i; x++) {
      if (i % x === 0) {
        flag = false
      }
    }

    if (flag && arr.length < 10) {
      arr.push(i)
    }
  }
  console.log(arr);
}

primeNumbers(100)

function primeNumbers(num) {
  const arr = [];
  let x = 1;
  do {
    let flag = true
    x++
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        flag = false
      }
    }
    if (flag && arr.length < 10) {
      arr.push(x)
    }
  } while(x < num)
  console.log(arr);
}

primeNumbers(100)