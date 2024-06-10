import {addTask, AllTasksI} from "../types/types.ts";
import {getDaysInMonth} from "../helper/helper.ts";

class Store {
    tasks: AllTasksI = {};

    addTask(task: addTask) {
        const day = {
            year: task.year,
            month: task.month,
            day: task.day,
            days: getDaysInMonth(task.month, task.year,),
        }

        if (!this.tasks[task.year]) {
            this.tasks[task.year] = {};
        }

        // Проверяем, существует ли месяц, если нет - создаем
        if (!this.tasks[task.year][task.month]) {
            this.tasks[task.year][task.month] = {};
        }
        console.log(day)
        if (!this.tasks[task.year][task.month][task.day]) {
            this.tasks[task.year][task.month][task.day] = {...day, tasks: []};
        }
        this.tasks[task.year][task.month][task.day] = {
            ...this.tasks[task.year][task.month][task.day],
            ...day,
            tasks: [...this.tasks[task.year][task.month][task.day].tasks, task]
        };
        return {...this.tasks}
    }
}

export default new Store()