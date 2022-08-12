import { configureStore, createSlice } from '@reduxjs/toolkit'



let nextId =1;

const todos = createSlice ({
  name : 'todos',
  initialState : {
    todo_1: []
  },
  reducers: {
    addTodo: (state, action) => {
      const plusTodo = {
        id: nextId++,
        title:action.payload.title, 
        content:action.payload.content, 
        isDone:false
      }
      state.todo_1.push(plusTodo)
      return state
    },
    deleteTodo: (state, action) => {
      console.log(action)
      const deleteFilter = { ...state, todo_1: state.todo_1.filter(todo => todo.id !== action.payload)}
      return deleteFilter
    },
    toggleTodo: (state, action) => {
      console.log(action)
      const toggleFilter =  { ...state, todo_1: state.todo_1.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone} : todo)}
      return toggleFilter
    }


  }
})


export let { addTodo, deleteTodo, toggleTodo } = todos.actions;

export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
