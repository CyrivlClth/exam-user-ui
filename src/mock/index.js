import Mock from 'mockjs'
import taskApi from './task'
import startApi from './start'


Mock.mock(/\/tasks\/\d*/, 'get', taskApi.getTask)
Mock.mock(/\/tasks/, 'get', taskApi.fetchTask)
Mock.mock(/\/start/, 'get', startApi.fetchStart)
Mock.mock(/\/start/, 'post', startApi.updateStart)