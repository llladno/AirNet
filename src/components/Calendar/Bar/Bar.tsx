const Bar = ({year, month, dateChange} : {year: number, month: number, dateChange: any}) => {


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
        <div>
            <button onClick={() => handleDate(-1)}>-</button>
            <h2>0{month} {year}</h2>
            <button onClick={() => handleDate(1)}>+</button>
        </div>
    );
};

export default Bar;