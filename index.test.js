const cases = require("jest-in-case");
const combinations = require("./index");

cases(
  "combinations(array)",
  (opts) => {
    const result = combinations(opts.array);
    expect(result).toEqual(opts.expected);
  },
  {
    "combinations(['a', 'b'])": {
      array: ["a", "b"],
      expected: [["a"], ["b"], ["a", "b"]],
    },
    "combinations(['a','b','c'])": {
      array: ["a", "b", "c"],
      expected: [
        ["a"],
        ["b"],
        ["c"],
        ["a", "b"],
        ["a", "c"],
        ["b", "c"],
        ["a", "b", "c"],
      ],
    },
    "combinations(['a','b','c', 'd'])": {
      array: ["a", "b", "c", "d"],
      expected: [
        ["a"],
        ["b"],
        ["c"],
        ["d"],
        ["a", "b"],
        ["a", "c"],
        ["a", "d"],
        ["b", "c"],
        ["b", "d"],
        ["c", "d"],
        ["a", "b", "c"],
        ["a", "b", "d"],
        ["a", "c", "d"],
        ["b", "c", "d"],
        ["a", "b", "c", "d"],
      ],
    },
    "combinations(['a', 'b', 'c', 'd', 'e'])": {
      array: ["a", "b", "c", "d", "e"],
      expected: [
        ["a"],
        ["b"],
        ["c"],
        ["d"],
        ["e"],
        ["a", "b"],
        ["a", "c"],
        ["a", "d"],
        ["a", "e"],
        ["b", "c"],
        ["b", "d"],
        ["b", "e"],
        ["c", "d"],
        ["c", "e"],
        ["d", "e"],
        ["a", "b", "c"],
        ["a", "b", "d"],
        ["a", "b", "e"],
        ["a", "c", "d"],
        ["a", "c", "e"],
        ["a", "d", "e"],
        ["b", "c", "d"],
        ["b", "c", "e"],
        ["b", "d", "e"],
        ["c", "d", "e"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "e"],
        ["a", "b", "d", "e"],
        ["a", "c", "d", "e"],
        ["b", "c", "d", "e"],
        ["a", "b", "c", "d", "e"],
      ],
    },
  }
);
