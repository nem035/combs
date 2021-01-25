module.exports = function getCombinations(arr) {
  const result = [];
  const k = arr.length;

  for (let i = 1; i <= k; i += 1) {
    result.push(...getCombinationsForK(arr, i));
  }

  return result;
};

function getCombinationsForK(arr, k) {
  if (k < 2) return arr.map((item) => [item]);

  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const curr = arr[i];
    const right = arr.slice(i + 1);

    // only compute combinations that can fit in the given range
    if (right.length >= k - 1) {
      for (const comb of getCombinationsForK(right, k - 1)) {
        result.push([curr, ...comb]);
      }
    }
  }
  return result;
}
