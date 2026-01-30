
const toDokey = "reactToDo"

export const getTodo = () => {
      const getTodoData = JSON.parse(localStorage.getItem(toDokey))
      if(!getTodoData ) return  [];
      return getTodoData
    }

export const setTodo = (task) => {
    return localStorage.setItem(toDokey, JSON.stringify(task))  
}  

