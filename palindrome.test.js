const isPalindrome = require('./palindrome')

describe('#isPalindrome', () => {

    test('Should return null if input is empty, a whitespace, or not a string type', () => {
        const output = isPalindrome()
        const output2 = isPalindrome('')
        const output3 = isPalindrome(' ') // using space
        const output4 = isPalindrome(123)
        const output5 = isPalindrome(['string'])
        const output6 = isPalindrome('  ') // using tab

        expect(output).toBe(null)
        expect(output2).toBe(null)
        expect(output3).toBe(null)
        expect(output4).toBe(null)
        expect(output5).toBe(null)
        expect(output6).toBe(null)
    })

    test('Should return true even if input contains spaces or tabs', () => {
        const output = isPalindrome('A  b a') // contains space and tab
        const output2 = isPalindrome('Aba ') // contains space
        const output3 = isPalindrome('A b a') // contains spaces
        const output4 = isPalindrome('   Ab  a') // contains tabs

        expect(output).toBe(true)
        expect(output2).toBe(true)
        expect(output3).toBe(true)
        expect(output4).toBe(true)
    })

    test('Should return true if string is palindrome using different case characters', () => {
        const output = isPalindrome('Aba')
        expect(output).toBe(true)
    })

    test('Should return false if input is not palindrome', () => {
        const output = isPalindrome('abc')
        expect(output).toBe(false)
    })

    test('Should return true if input is a palindrome string', () => {
        const output = isPalindrome('madam')
        const output2 = isPalindrome('racecar')
        const output3 = isPalindrome('Able was I ere I saw Elba')
        expect(output).toBe(true)
        expect(output2).toBe(true)
        expect(output3).toBe(true)
    })
})