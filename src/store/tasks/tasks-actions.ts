import { nanoid } from 'nanoid';
import {ADD_TASK, DELETE_TASK} from './tasks-types'

export type Task = {
    id: string;
    title: string;
    deleted: boolean;
  }

export const addTask = (payload: string) =>  {
    return {
        type:ADD_TASK,
         payload:{
            id: nanoid(),
            title: payload,
            deleted: false,
         }
        }
}

export const deleteTask = (payload: string)=> {
    return {type:DELETE_TASK, payload}
}