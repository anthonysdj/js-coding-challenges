const isPalindrome = (str) => {
    if (!str || typeof str !== 'string' || str.trim() === '') return null

    const reverseStr = (str.split('').reverse()).join('')
    const WHITE_SPACES_AND_TABS = /\s/g

    return str.toUpperCase().replace(WHITE_SPACES_AND_TABS, '') === reverseStr.toUpperCase().replace(WHITE_SPACES_AND_TABS, '')
}

module.exports = isPalindrome