import './bar.css'
import ANIconButton from "../../common/ANIconButton/ANIconButton.tsx";

const Bar = ({year, month, dateChange} : {year: number, month: number, dateChange: (year: number, month: number) => void}) => {

    function handleDate(num: number) {
        month += num
        if (month < 1) {
            month = 12
            year -= 1
        }
        if (month > 12) {
            month = 1
            year += 1
        }
        dateChange(year, month)
    }

    return (
        <div className='calendar__bar'>
            <ANIconButton onClick={() => handleDate(-1)}>-</ANIconButton>
            <h2>{month} {year}</h2>
            <ANIconButton onClick={() => handleDate(1)}>+</ANIconButton>
        </div>
    );
};

export default Bar;