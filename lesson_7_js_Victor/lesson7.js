const repeatString = (str, num, sep) => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
        if (i < num - 1) result += sep;
    }
    return result;
};

console.log(repeatString("we", 100, ", "))

function checkStart(str, substr) {
    let modStr = str.toLowerCase()
    let modSubstr = substr.toLowerCase()
    return modStr.indexOf(modSubstr) === 0;
}

console.log(checkStart("InCubator", "iNc"))

function truncateString(string, number) {
    let result = string.slice(0, number) + '...';
    return result;
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

function getMinLengthWord(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return null;
    }

    let words = str.split(' ');

    if (words.length === 1) {
        return words[0];
    }

    let minWord = words[0],
        minLen = words[0].length;

    for (let i = 1; i < words.length; i++) {
        let currentLen = words[i].length;
        if (currentLen < minLen) {
            minWord = words[i];
            minLen = currentLen;
        }
    }

    return minWord;
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."))
console.log(getMinLengthWord(""))
console.log(getMinLengthWord(123))

function setUpperCase(str) {
    let arrStr = str.split(' ');
    let resStr = [];

    for (let word of arrStr) {
        let firstLetter = word[0].toUpperCase();
        let restStr = word.slice(1).toLowerCase();
        resStr.push(firstLetter + restStr);
    }

    return resStr.join(' ');
}

console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ'));

const checkString = (str, substr) => {
    const regexp = new RegExp(`[${substr}]`, 'g');
    const result = str.match(regexp);
    return result && substr.length === result.length;
};

console.log(checkString('qwerty', 'qy'));
console.log(checkString('qwerty', 'tt'));