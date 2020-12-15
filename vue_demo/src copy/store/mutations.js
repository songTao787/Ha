import {ADD ,DEL,SELECTALL,DELETECHECKED,REQDATA} from './type'
export default{
    [ADD](state,{item}){
        state.usernamelist.unshift(item)
    },
    [DEL](state,{index}){
        state.usernamelist.splice(index,1)
    },
    [SELECTALL](state,{value}){
        state.usernamelist.forEach(item => item.state = value)
    },
    [DELETECHECKED](state){
         state.usernamelist = state.usernamelist.filter(item => !item.state)
    },
    [REQDATA](state,{value}){
        state.usernamelist = value
    }
}