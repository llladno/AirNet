import Bar from "./Bar/Bar.tsx";
import {useContext, useState} from "react";
import {AllTasksI, DayI} from "../../types/types.ts";
import Day from "./Day/Day.tsx";
import './calendar.css'
import {PopupContext} from "../PopupRovider/PopupProvider.tsx";

function getDaysInMonth(month: number, year: number) {
    return new Date(year, month , 0).getDate();
}

const Calendar = () => {
    const [fullYear, setFullYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth() + 1)

    const [date, setDate] = useState(getDaysInMonth(fullYear, month))
    const {setPopupContext} = useContext<{isOpen: boolean, data: any}>(PopupContext);

    const day = 3
    const data: AllTasksI = {}
    data[fullYear] = {
        [month]: {
            [day]: {
                days: getDaysInMonth(month, fullYear),
                year: fullYear,
                month: month,
                day: day,
                dayOfWeek: new Date(fullYear, month, day).getDay(),
                tasks: [{
                    type: 'Срочный',
                    title: 'Задача 1',
                    description: 'Задача 1',
                    time: '12:00-13:00',
                }]
            }
        }
    }
    const ArrayDays = new Array(date).fill(null).map((_, i) => {
        return data[fullYear][month][day].day == i + 1 ? data[fullYear][month][day] : null
    })

    function dateChange(year: number, month: number) {
        setFullYear(year)
        setMonth(month)
        setDate(getDaysInMonth(month, year))
    }

    return (
        <div>
            <Bar dateChange={dateChange} year={fullYear} month={month}/>
            <div className='calendar__days'>
                {ArrayDays.map((day: DayI | null, index) => <div>
                    {day ? <Day day={day}/> : <div className='calendar__days__day-empty'
                                                   onClick={() => setPopupContext({
                                                       isOpen: true, data: {
                                                           year: fullYear,
                                                           month: month,
                                                           day: index + 1
                                                       }
                                                   })}>{index + 1}</div>}
                </div>)}
            </div>

        </div>
    );
};

export default Calendar;