function reverseArray(myArray) {
  newArray = [];
  for (let num = myArray.length - 1; num >= 0; num--) {
    newArray.push(myArray[num]);
  }
  return newArray;
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));

function reverseArrayInPlace(arrayValue) {
  let start = 0;
  let end = arrayValue.length - 1;

  while (start < end) {
    // Swap elements
    let temp = arrayValue[start];
    arrayValue[start] = arrayValue[end];
    arrayValue[end] = temp;

    // Move towards the middle
    start++;
    end--;
  }

  return arrayValue;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
