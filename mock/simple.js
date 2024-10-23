/*
 * 简单封装
 */
import Mock from './index.js'

// 获取Random对象
const Random = Mock.Random
export default Random

/**
 * @description 获取指定范围的整形数据
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns {Number} 返回指定范围的整形数据
 */
export function getIntegerInRange(min, max) {
  return Random.integer(min, max)
}


/**
 * @description 获取指定数组，指定数量不重复元素
 * @param {Array} arr 数组
 * @param {Number} count 数量
 * @returns {Array} 返回获取的元素
 */
export function getCountElementsInArray(arr, count) {
  return Random.shuffle(arr).slice(0, count)
}

