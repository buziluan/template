/*
 * @Description:  axios插件，对axios进行封装配置。
 * @Author: 房旭
 * @Date: 2019-07-14 19:38:17
 * @LastEditors: 房旭
 * @LastEditTime: 2019-09-22 11:57:44
 */

//执行严格模式
"use strict";
import Vue from "vue";
import axios from "axios";
import { URI } from "../config/index"
//axios配置
let config = {
    headers: {
        //设置请求头，使用json
        "Content-Type": "application/json;charset=UTF-8",
    },
    baseURL: URI
};

//创建一个axios实例
const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // 发送请求前做什么（token）
        return config;
    },
    function (error) {
        //处理请求错误
        return Promise.reject(error);
    }
);

// 添加响应拦截器
_axios.interceptors.response.use(
    function (response) {
        //响应成功(状态码为20*)
        console.log("响应成功",response)
        return response;
    },
    function (error) {
        //响应失败(状态码不为20*)
        console.dir(error)
        return Promise.reject(error);
    }
);

let VueAxios = new Object();

VueAxios.install = function (Vue) {
    Vue.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};
//使用VueAxios
Vue.use(VueAxios);
