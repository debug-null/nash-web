import Vue from 'vue'
import { Message, Loading } from 'element-ui'
// @ts-ignore
import locale from 'element-ui/lib/locale/lang/en'
Vue.prototype.$message = Message

Vue.prototype.$loading = Loading.service

export default () => {
  Vue.use(Loading.directive)
  // Vue.use(Button, { locale });
}
