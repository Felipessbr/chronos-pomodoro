import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export function useTaskContexts () {
    return useContext(TaskContext)
    
}