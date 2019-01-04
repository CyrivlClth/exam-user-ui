import request from '@/utils/request'

export function GetTask(id) {
    return request({
        url: '/tasks/' + id,
        method: 'get',
    })
}