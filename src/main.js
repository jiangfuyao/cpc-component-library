// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入全局less
import './assets/common/less/base.less'
import './assets/common/css/cpc-highlight.css'
// 引入UI文件
import './assets/icon/iconfont'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入公共组件
import './assets/common/js/source'

// 引入工具类
import Tools from './assets/common/js/tools'

Vue.config.productionTip = false

Vue.prototype.$tools = Tools

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

let ruler = `%cWelcome %cto %ccpc %ccomponent %clibrary`
let css1 = `color:red;font-size:18px;text-shadow:4px 4px 4px #ff8e8e`
let css2 = `color:#ff00a5;font-size:18px;text-shadow:4px 4px 4px #ff68ca`
let css3 = `color:#a900ff;font-size:18px;text-shadow:4px 4px 4px #dd95ff`
let css4 = `color:#5600ff;font-size:18px;text-shadow:4px 4px 4px #b084fb`
let css5 = `color:#00adff;font-size:18px;text-shadow:4px 4px 4px #84d7ff`
console.log(ruler, css1, css2, css3, css4, css5)
