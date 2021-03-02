const distributeCandies = require('./distributeCandies')

test('should return length of unique candy types if unique candy types length is less than half or equal the size of candies', () => {
    const out = distributeCandies([1,1,1,1,2,2,2,3,3,3])
    const out2 = distributeCandies([1,1,1,2])
    expect(out).toBe(3)
    expect(out2).toBe(2)
})

test('should return half the length of the total candies if unique candies length is greater than candies length', () => {
    const out = distributeCandies([1,1,2,3])
    const out2 = distributeCandies([1,1,2,2])
    expect(out).toBe(2)
    expect(out2).toBe(2)
})