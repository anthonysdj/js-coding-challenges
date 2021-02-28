const { test, expect } = require('@jest/globals')
const getMostUsedCharInString = require('./most-commonly-used-char')

test('should return null if input is not string', () => {
    const intInput = getMostUsedCharInString(123)
    const arrayInput = getMostUsedCharInString([123])

    expect(intInput).toBe(null)
    expect(arrayInput).toBe(null)
})

test('should return null if input is empty string or null', () => {
    const emptyStringInput = getMostUsedCharInString('')
    const nullInput = getMostUsedCharInString()

    expect(emptyStringInput).toBe(null)
    expect(nullInput).toBe(null)
})

test('should return white-space string if input is white space', () => {
    const input = getMostUsedCharInString(' ')

    expect(input).toBe('white-space')
})

test('return the last char when more than one char shows up the same number of times', () => {
    const output = getMostUsedCharInString('meetting')

    expect(output).toBe('t')
})

test('should return the most used character in a string', () => {
    const output = getMostUsedCharInString('Jesus')

    expect(output).toBe('s')
})