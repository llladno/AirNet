import Bar from "./Bar/Bar.tsx";
import {useContext, useEffect, useState} from "react";
import { DayI} from "../../types/types.ts";
import Day from "./Day/Day.tsx";
import './calendar.css'
import {PopupContext, PopupContextI} from "../PopupProvider/PopupProvider.tsx";
import {PopupDataContext, Props} from "../DataChangeProvider/DataChangeProvider.tsx";
import Store from "../../store/store.ts";
import {getDaysInMonth, getFirstDayOfWeek} from "../../helper/helper.ts";



const Calendar = () => {
    const [fullYear, setFullYear] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth() + 1)
    const [arrayDays, setArrayDays] = useState([])
    const [emptyDays, setEmptyDays] = useState([])

    const {setPopupContext} = useContext<PopupContextI>(PopupContext);
    const {dataContext} = useContext<Props>(PopupDataContext);

    useEffect(() => {
        const storage = Store.tasks
        const array = new Array(getDaysInMonth(month, fullYear)).fill(null).map((_, i) => {
            if (storage[fullYear] && storage[fullYear][month])
                for (let b in storage[fullYear][month]){
                    return +b == i + 1 ? storage[fullYear][month][b] : null
                }
        })
        setEmptyDays(new Array(getFirstDayOfWeek(fullYear, month - 1)).fill(null))
        setArrayDays(array)
    }, []);

    useEffect(() => {
        if (dataContext[fullYear] && dataContext[fullYear][month]){
            for (let b in dataContext[fullYear][month]){
                const monthData = dataContext[fullYear][month];
                const updatedArrayDays = arrayDays.slice().map((day, index) => {
                    return monthData[index + 1] || day;
                });
                setArrayDays(updatedArrayDays);
            }
        }
    }, [dataContext]);

    function dateChange(year: number, monthChange: number) {
        setFullYear(year)
        setMonth(monthChange)
        const storage = Store.tasks
        const array = new Array(getDaysInMonth(monthChange, year)).fill(null).map((_, i) => {
            if (storage[year] && storage[year][monthChange])
                for (let b in storage[year][monthChange]){
                    return +b == i + 1 ? storage[year][monthChange][b] : null
                }
        })
        setEmptyDays(new Array(getFirstDayOfWeek(year, monthChange - 1)).fill(null))
        setArrayDays(array)
    }

    return (
        <div>
            <Bar dateChange={dateChange} year={fullYear} month={month}/>
            {<div className='calendar__days'>
                    <div>Пн</div>
                    <div>Вт</div>
                    <div>Ср</div>
                    <div>Чт</div>
                    <div>Пт</div>
                    <div>Сб</div>
                    <div>Вс</div>
                {emptyDays.map(()=> <div></div>)}
                {arrayDays.map((day: DayI | null, index) => <div>
                    {day ? <Day day={day}/> : <div className='calendar__days__day-empty'
                                                   onClick={() => setPopupContext({
                                                       isOpen: true, data: {
                                                           year: fullYear,
                                                           month: month,
                                                           day: index + 1
                                                       }
                                                   })}>{index + 1}</div>}
                </div>)}
            </div>}

        </div>
    );
};

export default Calendar;