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

        if (!this.tasks[task.year][task.month]) {
            this.tasks[task.year][task.month] = {};
        }
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

    deleteTask(task: addTask): AllTasksI {
        this.tasks[task.year][task.month][task.day].tasks = this.tasks[task.year][task.month][task.day].tasks.filter((el) =>  el.title !== task.title
        )
        return {...this.tasks}
    }
}

export default new Store()