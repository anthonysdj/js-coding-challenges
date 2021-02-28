const isPalindrome = (str) => {
    if (!str || typeof str !== 'string' || str.trim() === '') return null

    const reverseStr = (str.split('').reverse()).join('')
    const NO_WHITE_SPACES_OR_TABS = /\s/g

    return str.toUpperCase().replace(NO_WHITE_SPACES_OR_TABS, '') === reverseStr.toUpperCase().replace(NO_WHITE_SPACES_OR_TABS, '')
}

module.exports = isPalindrome