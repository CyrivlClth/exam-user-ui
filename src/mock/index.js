import Mock from 'mockjs'
import taskApi from './task'


Mock.mock(/\/tasks/, 'get', taskApi.fetchTask)
Mock.mock(/\/tasks\/\w*/, 'get', taskApi.getTask)