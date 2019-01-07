import request from '@/utils/request'

export function GetStart() {
    return request({
        url: '/start',
        method: 'get',
    })
}

export function UpdateStart(data) {
    return request({
        url: '/start',
        method: "post",
        data
    })
}