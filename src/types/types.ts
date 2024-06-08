export interface AllTasksI {
    [year: number]: YearI
}

export interface YearI {
    [month: number]: MonthI

}

export interface MonthI {
    [day: number]: DayI
}

export interface DayI {
    days: number
    year: number
    month: number
    day: number
    dayOfWeek: number
    tasks: TaskI[]
}

export interface TaskI {
    type: string
    title: string
    description: string
    time: string
    color: string
}