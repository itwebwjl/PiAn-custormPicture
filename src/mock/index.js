import Mock from 'mockjs'
import TestMockModules from './modules/test'

if (process.env.MOCK) {
  Mock.mock('/test/test', 'get', TestMockModules.test)
}
export default Mock;
