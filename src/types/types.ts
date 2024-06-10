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
    tasks: TaskI[]
}

export interface TaskI {
    type: string
    title: string
    description: string
    time: string
    color?: string
}

export interface addTask {
    color: string
    description: string
    time: string
    title: string
    type: string
    day: number
    month: number
    year: number
}