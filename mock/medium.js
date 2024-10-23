/**
 * 对于Mock.Random加一层，指定属性名
 * 对于Mock.mock，不在simple中，直接指定属性名
 */
import Mock from './index.js'
import Random from './simple.js';

import { 
  getIntegerInRange, 
  getCountElementsInArray
} from "./simple.js";

/**
 * @description 获取指定范围的整形数据
 * @param {String} attrName 属性名
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns {Number} 返回指定范围的整形数据
 */
export function getIntegerInRangeWithAttrName(attrName = "number", min, max) {
  return {
    [attrName]: getIntegerInRange(min, max)
  }
}


/**
 * @description 获取指定数组中指定范围数量的不重复元素，若min=0则max为指定数量
 * @param {String} attrName 属性名
 * @param {Array} arr 数组
 * @param {Number} min 最小数量
 * @param {Number} max 最大数量
 */
export function getArrayElementInRangeWithAttrName(attrName, arr, min = 0, max = 1) {
  if (min === 0) {
    if (max === 1) {
      return { [attrName]: Random.pick(arr) }
    }else {
      return { [attrName]: getCountElementsInArray(arr, max) }
    }
  }
  else {
    const count = Random.integer(min, max)
    return { [attrName]: getCountElementsInArray(arr, count) }
  }
}


/**
 * @description 获取指定宽高的图片链接地址
 * @param {String} attrName 属性名
 * @param {Number} width 宽度
 * @param {Number} height 高度
 */
export function getPicAddressInRangeWithAttrName(attrName, width, height) {
  return {[attrName]: `https://picsum.photos/${width}/${height}`}
}