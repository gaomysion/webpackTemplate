import * as types from '../../constants/test/testType.js'
/**
 * 当前文件是测试的action
 * @param {[type]} text [description]
 */
//改变input输入框的值
export function changeInput(text) {
  //第二个参数的意思是把传入的text的值当做数据传递
  return { type: types.CHANGE_INPUT, text }
}