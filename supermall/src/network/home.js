import {request} from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata',
    })
}

export function getHomeData() {
    return request({
        url: '/home/data',
        params: {
            type: 'sell',
            page: 3
        }
    })
}