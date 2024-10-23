import Mock from 'mockjs'
export default Mock

/**
 * 第一次测试获取随机数据
 */
export function test() {
  return Mock.mock({
    "star|1-10": '★'
  })
}
