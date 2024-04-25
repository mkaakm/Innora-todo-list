import { Task } from "./tasks-actions"
import { RootState } from "../store"
export const selectAllTasks = ({tasks}: RootState) => tasks
export const selectDeletedTasks = ({tasks} : RootState) => tasks.filter((item : Task)=>item.deleted)
