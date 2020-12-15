export default{
    total(state){
        return state.usernamelist.length
    },
    reducenum(state){
        return state.usernamelist.reduce((p, arr) => p + (arr.state ? 1 : 0), 0)
        // return state.usernamelist.reduce((preTotal,item) => preTotal + (item.state ? 1 :0),0)
    },
    isCheckAll(state,getters){
        return getters.reducenum === getters.total && getters.reducenum > 0
    }
}