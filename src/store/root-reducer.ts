import { combineReducers } from "redux";
import { Task } from "./tasks/tasks-actions";
import tasksReducer from "./tasks/tasks-reducer";
export interface RootState {
    tasks: Task[];
  }
  
  const rootReducer = combineReducers({
    tasks: tasksReducer,
  });

  export default rootReducer