import React from "react";

import './App.css';
import TasksList from "./components/TasksList";
import Sidebar from "./components/Sidebar";
import { TaskProvider } from "./components/TasksContext";
import AddTasks from "./components/AddTasks";


const Development = () => {
    return (
        <div>
             <div >
            <TaskProvider>                
                           <AddTasks />
                           <Sidebar />
                           <TasksList />          
                 
            </TaskProvider>
        </div>
        </div>
    );
};

export default Development;