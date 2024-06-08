import {DayI, TaskI} from "../../../types/types.ts";
import Task from "./Task/Task.tsx";
import './day.css'
import ANIconButton from "../../common/ANIconButton/ANIconButton.tsx";
import {useContext} from "react";
import {PopupContext} from "../../PopupRovider/PopupProvider.tsx";

const Day = ({day}: { day: DayI }) => {
    const {context, setContext} = useContext(PopupContext);
    return (
        <div className='calendar__days__day'>
            <h2>{day.day}</h2>
            <div>{day.tasks.map((el: TaskI, index) => <Task task={el} key={index}/>)}
            </div>
            <ANIconButton onClick={() => setContext(true)}>+
                {/*<svg width="16px" height="16px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
                {/*     stroke="#9b9b9b">*/}
                {/*    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
                {/*    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>*/}
                {/*    <g id="SVGRepo_iconCarrier">*/}
                {/*        <path fill="#9b9b9b" fill-rule="evenodd"*/}
                {/*              d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"></path>*/}
                {/*    </g>*/}
                {/*</svg>*/}
            </ANIconButton>
        </div>
    );
};

export default Day;