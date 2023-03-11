function countElements(elements) {
  let count = {};
  for (let i = 0; i < elements.length; i++) {
    // If the current element already exists as a key in the count object, increment its count by 1
    if (count[elements[i]]) {
      count[elements[i]]++;
    } else {
      // Otherwise, add a new key to the count object with a count of 1
      count[elements[i]] = 1;
    }
  }
  return count;
}
