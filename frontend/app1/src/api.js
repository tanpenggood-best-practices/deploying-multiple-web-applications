import request from '@/utils/request'

export function versionAPI() {
    return request({
        url: '/version',
        method: 'get',
    })
}