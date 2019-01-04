import Mock from 'mockjs'
import taskApi from './task'


Mock.mock(/\/tasks\/\d*/, 'get', taskApi.getTask)
Mock.mock(/\/tasks/, 'get', taskApi.fetchTask)