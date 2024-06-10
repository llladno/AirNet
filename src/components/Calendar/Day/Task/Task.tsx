import {TaskI} from "../../../../types/types.ts";
import './task.css'
import {useContext} from "react";
import {PopupContext} from "../../../PopupProvider/PopupProvider.tsx";

const Task = ({task} : {task: TaskI}) => {
    const {setPopupContext} = useContext(PopupContext);

    return (
        <div className='calendar__days__day__task' onClick={() => setPopupContext({isOpen: true, data: task})} style={{background: task.color}}>
            <h2>{task.title}</h2>
            <p>{task.time}</p>
        </div>
    );
};

export default Task;