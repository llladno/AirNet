import Bar from "./Bar/Bar.tsx";
import {useContext, useEffect, useState} from "react";
import {DayI} from "../../types/types.ts";
import Day from "./Day/Day.tsx";
import './calendar.css'
import {PopupContext, PopupContextI} from "../PopupProvider/PopupProvider.tsx";
import {PopupDataContext, Props} from "../DataChangeProvider/DataChangeProvider.tsx";
import Store from "../../store/store.ts";
import {getDaysInMonth, getFirstDayOfWeek} from "../../helper/helper.ts";
import Api from "../../api/api.ts";


const Calendar = () => {
    const [fullYear, setFullYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth() + 1)
    const [arrayDays, setArrayDays] = useState<(DayI | null | string)[]>([])
    const [emptyDays, setEmptyDays] = useState([])

    const {setPopupContext} = useContext<PopupContextI>(PopupContext);
    const {dataContext} = useContext<Props>(PopupDataContext);

    function setNewArrayDays(currentYear: number, currentMonth: number, result: string) {
        const str: string[] = result.split('')
        const storage = Store.tasks
        const array: (DayI | string | null)[] = new Array(getDaysInMonth(currentMonth, currentYear)).fill(null).map((_, i) => {
            if (storage[currentYear] && storage[currentYear][currentMonth])
                for (const b in storage[currentYear][currentMonth]) {
                    return +b == i + 1 ? storage[currentYear][currentMonth][b] : str[i] == '1' ? '#fcb1b1' : null
                }
            return str[i] == '1' ? '#fcb1b1' : null
        })
        setEmptyDays(new Array(getFirstDayOfWeek(currentYear, currentMonth - 1)).fill(null) as never)
        setArrayDays(array)
    }

    useEffect(() => {
        Api.getMonthDayOf(fullYear, month).then(res => setNewArrayDays(fullYear, month, res))
    }, []);

    useEffect(() => {
        if (dataContext[fullYear] && dataContext[fullYear][month]) {
            const monthData = dataContext[fullYear][month];
            const updatedArrayDays = arrayDays.slice().map((day, index) => {
                return monthData[index + 1] || day;
            });
            setArrayDays(updatedArrayDays);
        }
    }, [dataContext]);

    function dateChange(yearChange: number, monthChange: number) {
        setFullYear(yearChange)
        setMonth(monthChange)

        Api.getMonthDayOf(yearChange, monthChange).then(res => setNewArrayDays(yearChange, monthChange, res))
    }

    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    return (
        <div>
            <Bar dateChange={dateChange} year={fullYear} month={month}/>
            <div className='calendar__days'>
                {days.map((day) => <div className='calendar__days__day-name' key={day}>{day}</div>)}
                {emptyDays.map((_, index) => <div className='calendar__days__day-empty-disabled' key={index}></div>)}
                {arrayDays.map((day: DayI | null | string, index) => <div>
                    {day && typeof day != 'string' ? <Day key={index} day={day}/> :
                        <div className='calendar__days__day-empty' key={index} style={{background: day as string}}
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