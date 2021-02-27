const isAnagrams = require('./anagrams')

test('should return null if any input is not a string', () => {
    const isAnagram1 = isAnagrams(134, '123')
    const isAnagram2 = isAnagrams('123', 123)
    const isAnagram3 = isAnagrams(123, 123)

    expect(isAnagram1).toBe(null)
    expect(isAnagram2).toBe(null)
    expect(isAnagram3).toBe(null)
})

test('should return null if any input is null', () => {
    const isAnagram1 = isAnagrams()
    const isAnagram2 = isAnagrams('123')
    const isAnagram3 = isAnagrams(null, '123')

    expect(isAnagram1).toBe(null)
    expect(isAnagram2).toBe(null)
    expect(isAnagram3).toBe(null)
})

test('should return false if both input does not match length', () => {
    const isAnagram = isAnagrams('Jobs', 'Job')

    expect(isAnagram).toBe(false)
})

test('should return true when 2 parameters are anagrams of each other', () => {
    const isAnagram = isAnagrams('mac', 'cam')

    expect(isAnagram).toBe(true)
})