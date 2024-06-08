import Bar from "./Bar/Bar.tsx";
import {useState} from "react";
import {AllTasksI, DayI} from "../../types/types.ts";
import Day from "./Day/Day.tsx";
import './calendar.css'

const Calendar = () => {
    const fullYear = new Date().getFullYear()
    const month = new Date().getMonth()

    const [date, setDate] = useState(getDaysInMonth(fullYear, month))


    function getDaysInMonth(month: number, year: number) {
        return new Date(year, month + 1, 0).getDate();
    }

    console.log(date)
    let day = 3
    let data: AllTasksI = {}
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
    let ArrayDays = new Array(date).fill(null).map((_, i) => {
        return data[fullYear][month][day].day == i + 1 ? data[fullYear][month][day] : null
    })
    return (
        <div>
            <Bar year={fullYear} month={month}/>
            <div className='calendar__days'>
                {ArrayDays.map((day: DayI | null, index) => <div>
                    {day ? <Day day={day}/> : <div className='calendar__days__day-empty'>{index + 1}</div>}
                </div>)}
            </div>

        </div>
    );
};

export default Calendar;