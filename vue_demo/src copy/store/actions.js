
export default{
    add({commit},item){
        commit('add',{item})
    },
    del({commit},index){
        commit('del',{index})
    },
    seclectAll({commit},value){
        commit('selectall',{value})
    },
    deltetChecked({commit}){
        commit('deltetchecked')
    },
    req_data({commit},value){
        setTimeout(()=>{
          commit('reqData',{value})  
        },1000)
    }
}