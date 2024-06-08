import {TaskI} from "../../../../types/types.ts";
import './task.css'

const Task = ({task} : {task: TaskI}) => {
    return (
        <div className='calendar__days__day__task'>
            <h2>{task.title}</h2>
            <p>{task.time}</p>
        </div>
    );
};

export default Task;