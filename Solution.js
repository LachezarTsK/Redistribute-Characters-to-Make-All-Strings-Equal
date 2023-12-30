
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;

    if (words.length < 2) {
        return true;
    }

    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let word of words) {
        for (let i = 0; i < word.length; ++i) {
            ++frequency[word.codePointAt(i) - ASCII_SMALL_CASE_A];
        }
    }

    for (let current of frequency) {
        if (current % words.length !== 0) {
            return false;
        }
    }
    return true;
};
