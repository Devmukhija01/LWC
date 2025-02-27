import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
    @track tasks = []; // Array to store tasks
    newTask = ''; // Input field value

    // Update newTask when user types
    handleInputChange(event) {
        this.newTask = event.target.value;
    }

    // Add task to the list
    addTask() {
        if (this.newTask.trim() !== '') {
            this.tasks = [
                ...this.tasks,
                { id: Date.now(), name: this.newTask }
            ];
            this.newTask = ''; // Clear input field
        }
    }

    // Delete task from the list
    deleteTask(event) {
        const taskId = event.target.dataset.id;
        this.tasks = this.tasks.filter(task => task.id != taskId);
    }
}
