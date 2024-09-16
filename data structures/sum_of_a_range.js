function range(num1, num2, num3) {
  if (num3 > 0) {
    let array = [];
    for (let i = num1; i <= num2; i += num3) {
      array.push(i);
    }
    console.log(array);
  } else if (num3 < 0) {
    let array = [];
    for (let i = num1; i >= num2; i += num3) {
      array.push(i);
    }
    console.log(array);
  } else {
    console.log("Step value must be non-zero.");
  }
}

console.log(range(1, 10, 1));
console.log(range(10, 1, -1));
