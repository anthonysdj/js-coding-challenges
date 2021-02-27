/**
 * Plan
 * check if both string have the same length
 * loop through the first string
 * sort the second string
 * compare both string
 */

const sortStr2 = ({srcStr, targetStr, output = ''}) => {
    if (!srcStr) return output

    const srcStrToArray = srcStr.split('')
    const newOutput = output + srcStrToArray.shift()

    return sortStr2({srcStr: srcStrToArray.join(''), targetStr, output: newOutput})
}

const isAnagrams = (str1, str2) => {
    if (!str1 || !str2 || typeof str1 !== 'string' || typeof str2 !== 'string') return null

    // we need to remove whitespace because we do not need it for comparison
    // i'm using a new variable incase we need to output the original string
    const trimmedStr1 = str1.replace(/\s/g,'')
    const trimmedStr2 = str2.replace(/\s/g, '')

    // remove whitespace before comparing the length of strings
    if (trimmedStr1.length !== trimmedStr2.length) return false

    // sort the second string/target string
    let sorted = sortStr2({srcStr: trimmedStr1, targetStr: trimmedStr2})

    // compare string values if they are the same
    return trimmedStr1 === sorted
}

module.exports = isAnagrams