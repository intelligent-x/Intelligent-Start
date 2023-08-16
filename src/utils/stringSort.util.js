/**
 * 递归字符串排序
 * @param {String} a 
 * @param {String} b 
 * @param {Number} n 
 * @returns 
 */
const sort = (a, b, n = 0) => {
    // debugger
    const codeA = a.charCodeAt(n);
    const codeB = b.charCodeAt(n);
    if (codeA !== codeB) {
        return codeA - codeB;
    } else {
        const minLength = Math.min(a.length, b.length);
        if (n >= minLength) return a.length - b.length;
        return sort(a, b, n+1);
    }
}

export default sort;