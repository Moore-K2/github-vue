// 该项目是项目入口文件
// 引入Vue
import Vue from 'vue'
// 1 引入App组件，他是所有组件的父组件  2 注册，3 应用
import App from './App.vue'
//关闭vue的生成提示
Vue.config.productionTip = false

// 创建Vue的实例对象 vm
new Vue({
    //将App组件放入容器中
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }

}).$mount('#app')

// 之前的写法: 不奏效是因为，引入了vue/disk/下面的残缺的vue(没有模板解析器)
// template:`<app></app>`,
// components:{App},