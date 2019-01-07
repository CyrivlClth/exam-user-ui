import request from '@/utils/request'

export function GetStart() {
    return request({
        url: '/start',
        method: 'get',
    })
}