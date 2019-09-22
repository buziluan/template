/*
 * @Description: 工具类
 * @Author: 房旭
 * @Date: 2019-09-21 16:27:55
 * @LastEditors: 房旭
 * @LastEditTime: 2019-09-22 11:37:21
 */
import { clone } from "./clone"

/**
 * @description: 对象深拷贝
 * @param {obj} 需要拷贝的对象
 * @return: 返回拷贝完成的新对象
 */
export const ObjectCopy = (obj) => {
    return clone(obj)
}