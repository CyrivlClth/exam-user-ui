import request from '@/utils/request'


export function GetTest() {
    return request({
        url: '/test',
        method: 'get',
    })
}