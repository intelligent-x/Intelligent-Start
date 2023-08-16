import urlObj from "../store/urls";

/**
 * 根据路径寻找对应网址数组
 * @param {String} path 
 * @returns {Array} 网址数组
 */
const findUrls = path => {
    return urlObj[path];
}

export default findUrls;