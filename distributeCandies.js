/**
 * 
 * challenge: # Distribute Candies (from leetcode daily challenge)
 * Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
 * The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
 * Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
 */
const distributeCandies = function(candyType) {
    // best answer so far
    return Math.min((new Set(candyType)).size, candyType.length / 2)

    // second answer: way faster than the first but consumes bit more memory
    // const n = candyType.length
    // const types = [...new Set(candyType.map(ct => ct))]
    // return types.length <= n / 2 ? types.length : n / 2

    // first answer: memory efficient but slow
    // const types = candyType.filter((item, idx) => candyType.indexOf(item) === idx)
    // return (n / types.length) >= 2 && (n / types.length) < 10**4  ? types.length : n / 2
};

module.exports = distributeCandies