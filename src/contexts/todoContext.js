import { createContext, useContext } from "react";

export const TodoContext = createContext({
   todos: [
        {
            id:1,
            todo: "",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTdo:(id)=>{},
    toggleCompleted:(id)=>{}
})

export const useTodo = ()=>{
    return  useContext(TodoContext)
}

export const TodoProvidor = TodoContext.Provider