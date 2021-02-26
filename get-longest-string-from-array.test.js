const { test, expect } = require("@jest/globals");
const { keyword } = require("chalk");

const getLongestStringFromArray = require('./get-longest-string-from-array')

test('should return the longest string from a string array', () => {
    const longestString = getLongestStringFromArray(['aa', 'bbbb', 'ccc'])

    expect(longestString).toBe('bbbb')
})

test('should return the first longest string if longest string are more than 1', () => {
    const longestString = getLongestStringFromArray(['aa', 'ddd', 'ccc'])

    expect(longestString).toBe('ddd')
})