import os from 'os'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

//  定义__filename和__dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @description 获取本地服务器的IP地址
 * @returns {String} 返回本地服务器的IP地址
 */
export const getLocalhostIP = () => {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return 'http://localhost'
}

/**
 * @description 从一个数组中随机获取指定数量不重复的元素
 * @param {Array} arr 数组
 * @param {Number} count 获取的数量
 * @returns {Array} 返回获取的元素
 */
export const getCountElementsInArray = (arr, count) => {
}



/**
 * @description 将多个对象合并成一个对象
 * @param {...arg}
 * @returns {Object} 返回合并后的对象
 */


/**
 * @description 从txt文件中读取数据存入数组
 * @param {String} fileName 文件名
 * @returns {Array} 返回数组
 */
export const readDataFromTxt = (fileName) => {
  let data = []
  const filePath = path.resolve(__dirname, `../assets/data/${fileName}.txt`)
  if (!fs.existsSync(filePath)) {
    console.error(`${filePath}文件不存在!!!`)
    return
  }
  try {
    data = fs.readFileSync(filePath, 'utf-8')
  } catch (err) {
    console.error(err)
  }
  return data.replace(/\r/g, '').split('\n')
}