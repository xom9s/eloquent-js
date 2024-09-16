function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}

// Test cases
console.log(countBs("BBC")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4
