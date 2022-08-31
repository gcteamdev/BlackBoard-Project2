import React,{useContext} from 'react';
import { TasksContext } from './TasksContext';
import "./Sidebar.css"


const Sidebar = () => {
    const [tasks, setTasks] = useContext(TasksContext);
    return (
        <div className="text-left text-primary col p-5 numOfTask mt-3 d-md-flex d-sm-block">
            <h3>Dashboard</h3>
            <h4 className="text-dark">List of tasks:{tasks.length} </h4>
        </div>
    );
};

export default Sidebar;