// 第一种
// 引入mockjs
// const Mock = require('mockjs');
// 创建模拟数据
// let testData = {
//   testData: '测试mock'
// }
// Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/getMockData', 'get', testData)

// mock.js

// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// 创建模拟数据
let testData = function () {
  let dataList = [];
  for (let i = 0; i < 10; i++) {
    let obj = {
      title: Random.csentence(6), //  Random.csentence( min, max ) 随机生成一段10-20长度的汉字字符串
      picture: Random.dataImage('60x60', '测试图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    }
    dataList.push(obj)
  }

  return {
    dataList: dataList
  }
}
Mock.mock('/getMockData', 'get', testData)
// Mock.mock( url, post/get , 返回的数据)；
