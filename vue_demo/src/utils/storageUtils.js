/*
向local存储数据的工具模块
*/ 
export default{
    readTodos(){
        return JSON.parse(localStorage.getItem('todoes_key') || '[]');
    },
    saveTodos(todos){
        localStorage.setItem('todoes_key',JSON.stringify(todos))
    }
}