// hasTargetSum.js

/**
 * Checks if any two numbers in the array add up to the target sum.
 * @param {number[]} array - An array of numbers.
 * @param {number} target - The target sum to check for.
 * @returns {boolean} - True if any two numbers add up to the target sum, false otherwise.
 */
function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const num of array) {
    const complement = target - num;

    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}

// Export the function
module.exports = hasTargetSum;
