class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName, priority, dueDate, status = "in-progress") {
        const task = { taskName, priority, dueDate: new Date(dueDate), status };
        this.tasks.push(task);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.taskName !== taskName);
    }

    updateTask(taskName, updatedData) {
        const task = this.tasks.find(task => task.taskName === taskName);
        if (task) Object.assign(task, updatedData);
    }

    sortTasks() {
        this.tasks.sort((a, b) => a.priority - b.priority || a.dueDate - b.dueDate);
    }

    checkOverdue() {
        const today = new Date();
        return this.tasks.filter(task => task.dueDate < today && task.status !== "completed");
    }

    filterTasks(status) {
        return this.tasks.filter(task => task.status === status);
    }

    displayTasks() {
        this.tasks.forEach(task => {
            const isOverdue = task.dueDate < new Date() && task.status !== "completed";
            console.log(`Task: ${task.taskName}, Priority: ${task.priority}, Due Date: ${task.dueDate.toLocaleDateString()}, Status: ${task.status}`);
            if (isOverdue) {
                console.log("%cOverdue Task", "color: red;");
            } else {
                console.log("%cUpcoming Task", "color: green;");
            }
        });
    }
}

let taskManager = new TaskManager();
taskManager.addTask("Complete JavaScript Project", 1, "2025-01-15");
taskManager.addTask("Submit Assignment", 2, "2025-01-07", "completed");
taskManager.addTask("Review Code", 3, "2025-01-10");
taskManager.sortTasks();

taskManager.displayTasks();
