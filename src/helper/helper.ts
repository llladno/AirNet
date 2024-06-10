export function getDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

export function getFirstDayOfWeek(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    return firstDay.getDay() - 1;
}