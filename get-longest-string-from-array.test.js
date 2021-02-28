const { test, expect } = require("@jest/globals");

const getLongestStringFromArray = require('./get-longest-string-from-array')

test('should return null if no input provided', () => {
    const longestString = getLongestStringFromArray()

    expect(longestString).toBe(null)
})

test('should return null if non array input is provided', () => {
    const longestStringInt = getLongestStringFromArray(123)
    const longestStringStr = getLongestStringFromArray('string')

    expect(longestStringInt).toBe(null)
    expect(longestStringStr).toBe(null)
})

test('should return the longest string from a string array', () => {
    const longestString = getLongestStringFromArray(['aa', 'bbbb', 'ccc'])
    const longestString2 = getLongestStringFromArray(['aa', 'bbbb', 'ccccccc'])

    expect(longestString).toBe('bbbb')
    expect(longestString2).toBe('ccccccc')
})

test('should return the first longest string if longest string are more than 1', () => {
    const longestString = getLongestStringFromArray(['aa', 'ddd', 'ccc', 'aaa'])

    expect(longestString).toBe('ddd')
})