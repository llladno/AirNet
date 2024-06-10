class Api{

    getMonthDayOf(year: number, month: number){
        return  fetch(`https://isdayoff.ru/api/getdata?year=${year}&month=${month}`).then((res) => res.text())
    }
}

export default new Api()