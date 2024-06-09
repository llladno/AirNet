import {AllTasksI} from "../types/types.ts";


class Store {
    tasks: AllTasksI = {
        2024: {
            6: {
                4: {
                    days: 30,
                    year: 2024,
                    month: 0,
                    day: 1,
                    dayOfWeek: 1,
                    tasks: []
                }
            }
        }
    }

    addTask(task: any) {
        console.log(task)
        this.tasks[task.year][task.month][task.day].tasks.push({
            title: task.title,
            description: task.description,
            time: task.time,
            color: task.color,
        })
        console.log(this.tasks)
    }
}

export default new Store()