// 引入Vue核心库
import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 应用Vuex
Vue.use(Vuex)

//求和相关的配置

//创建动作对象，相应组件中用户的动作
const actions = {
    jiaodd(context, value) {
        if (context.state.sum % 2) { context.commit("JIA", value) }
    },
    jiawait(context, value) {
        console.log("等一等再加触发,context是mini store")
        setTimeout(() => {
            context.commit("JIA", value);
        }, 500);
    }
}

//创建mutations对象，修改state中的数据、与devtools进行连接
const mutations = {
        JIA(state, value) {
            console.log("mutations中的JIA被调用了", value)
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
        ADD_PERSON(state, personObj) {
            console.log("ADD_PERSON被调用了")
            state.personList.unshift(personObj)
        }
    }
    //保存具体的数据
const state = {
        sum: 0,
        school: "CDUT",
        name: "Moore",
        personList: [{ id: "001", name: '张三' },
            { id: "002", name: '李四' },
            { id: "003", name: '王五' },
        ]
    }
    // 当state中的数据需要经过加工后再使用时，可以使用getters加工。
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// 创建store
// const store = new Vuex.Store({ actions,
// mutations,
// state
// })
// 暴露store
// export default store