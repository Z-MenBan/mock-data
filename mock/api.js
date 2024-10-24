/**
 * 定义接口的文件，使用封装好的方法
 */

import { 
  getIntegerInRangeWithAttrName,
  getBooleanWithAttrName,
  getIdWithAttrName,
  getArrayElementInRangeWithAttrName,
  getPicAddressInRangeWithAttrName,
  
} from "./medium.js";

import { readDataFromTxt } from "../utils/common.js";

/**
 * @description 获取游戏列表
 * @param {String} objName 对象名
 * @param {Number} min 游戏列表数量最小值
 * @param {Number} max 游戏列表数量最大值
 * @returns {Array} 返回游戏列表
 */
export const getGameList = (objName = "objectName", min, max) => {
  const randomNumber = getIntegerInRangeWithAttrName('数字', 1, 100)
  const randomArray = getArrayElementInRangeWithAttrName('游戏名', ['游戏1', '游戏2', '游戏3'], 0, 1)
  const randomPic = getPicAddressInRangeWithAttrName("图片", 200, 300)
  const randomBealoon = getBooleanWithAttrName("布尔值")
  const randomId = getIdWithAttrName("编号")
  console.log(randomNumber)
  console.log(randomArray)
  console.log(randomPic)
  const txtData = readDataFromTxt('game_list')
  console.log(txtData)
  console.log(typeof txtData)
}


/**
 * @description 获取游戏账号列表
 * @param {String} objName 对象名
 * @param {Number} min 游戏账号列表数量最小值
 * @param {Number} max 游戏账号列表数量最大值
 * @returns {Array} 返回游戏账号列表
 */
export const getGameAccountList = (objName = "objectName", min, max) => {
  const txtData = readDataFromTxt('game_account_list')
  console.log(txtData)
  console.log(typeof txtData)
}