/**
 * 定义接口的文件，使用封装好的方法
 */

import { 
  getIntegerInRangeWithAttrName,
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
  console.log(randomNumber)
  console.log(typeof randomNumber)
  console.log(randomArray)
  console.log(typeof randomArray)
  console.log(randomPic)
  console.log(typeof randomPic)
  const txtData = readDataFromTxt('game_list')
  console.log(txtData)
  console.log(typeof txtData)
}