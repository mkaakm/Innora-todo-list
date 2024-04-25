import { ADD_TASK, DELETE_TASK } from "./tasks-types";
import { Task } from "./tasks-actions";

  
  const initialState: Task[] = []
  
  export default function tasksReducer(state = initialState, action: any): Task[] {
    switch (action.type) {
      case ADD_TASK:
        return [...state, action.payload];
        
      case DELETE_TASK:
        const newState = state.map(item => ({...item}))
        const deleteTask = newState.find(item => item.id === action.payload)
        if(deleteTask) deleteTask.deleted = true
        return newState

      default:
        return state;
    }
  }