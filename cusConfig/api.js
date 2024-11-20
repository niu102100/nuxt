/**
 * http get 请求
 * @param url
 * @returns {Promise<void>}
 */
export const httpGet = async(url, ) => {
    return await httpRequest(url, { method: 'GET' })
}

/**
 * 统一请求方法
 * @param url
 * @param options
 * @returns {*}
 */
export const httpRequest = async(url, options) => {
    const config = useRuntimeConfig();
    // console.log("请求地址:" + config.public.baseUrl)
    return await useFetch(url, {
        baseURL: config.public.baseUrl,
        onRequest({ options }) {
            // 全局请求拦截 (需要注意是服务端请求还是客户端请求,需要单独处理相关逻辑)
            // options.headers = {
            //     "TOKEN": "123456",
            //     ...options.headers
            // }
        },
        onResponse({ response }) {
            // 全局响应拦截, 判断响应码等处理
            // console.log("返回数据" + response._data.value)
            return response._data;
        },
    })
}