import request from '@/utils/request'


export function GetTest() {
    return request({
        url: '/tasks',
        method: 'get',
    })
}

