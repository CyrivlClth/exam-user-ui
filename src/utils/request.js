import axios from 'axios'
import store from '@/store'


// 创建axios实例
const service = axios.create({
    baseURL: '/api', // api 的 base_url
    timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            // config.params = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
            console.log(config)
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const data = response.data
        console.log(data)
        return data
    },
    error => {
        console.log('err' + error.response.status) // for debug

        // if (error.response.status === 403) {
        //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //     confirmButtonText: '重新登录',
        //     cancelButtonText: '取消',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('FedLogOut').then(() => {
        //       location.reload() // 为了重新实例化vue-router对象 避免bug
        //     })
        //   })
        // }

        // toast.error(error.response.data.message)
        // })
        return Promise.reject(error)
    }
)

export default service