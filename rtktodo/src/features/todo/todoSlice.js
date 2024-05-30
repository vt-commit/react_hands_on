import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(), 
                text:action.payload.text
                //text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((eachTodo)=> action.payload !== eachTodo.id)
        },
        // updateTodo:(state,action)=>{
        //     state.todos.map((eachTodo)=> eachTodo.id === action.payload ? eachTodo.text = action.payload : eachTodo.text)
        // }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions 

export default todoSlice.reducer