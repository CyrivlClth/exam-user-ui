import request from '@/utils/request'


export function GetTest() {
    return request({
        url: '/tasks',
        method: 'get',
    })
}

export function GetTask(id) {
    return request({
        url: '/tasks/' + id,
        method: 'get',
    })
}