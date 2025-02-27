import { LightningElement, track, wire } from 'lwc';
import getTasks from '@salesforce/apex/ToDoList.getTasks';
import createTask from '@salesforce/apex/ToDoList.createTask';
import deleteTask from '@salesforce/apex/ToDoList.deleteTask';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class toDoListInTaskObj extends LightningElement {
    @track tasks = [];
    taskName = '';
    taskDescription = '';
    TaskList;

    @wire(getTasks)
    wiredTasks(result) {
        this.TaskList = result; // Store the wired result for refreshing
        if (result.data) {
            this.tasks = result.data;
        } else if (result.error) {
            console.error('Error fetching tasks:', result.error);
        }
    }

    handleNameChange(event) {
        this.taskName = event.target.value;
    }

    handleDescriptionChange(event) {
        this.taskDescription = event.target.value;
    }

    handleAddTask() {
        if (this.taskName.trim() === '') {
            this.showToast('Error', 'Task Name is required!', 'error');
            return;
        }

        createTask({ subject: this.taskName, description: this.taskDescription })
            .then(() => {
                this.showToast('Success', 'Task added successfully!', 'success');
                return refreshApex(this.TaskList); // Refresh task list
            })
            .catch(error => {
                console.error('Error creating task:', error);
                this.showToast('Error', 'Failed to create task.', 'error');
            });

        // Clear input fields
        this.taskName = '';
        this.taskDescription = '';
    }

    handleDeleteTask(event) {
        const taskId = event.target.dataset.id;

        deleteTask({ taskId })
            .then(() => {
                this.showToast('Success', 'Task deleted successfully!', 'success');
                return refreshApex(this.TaskList); // Refresh task list
            })
            .catch(error => {
                console.error('Error deleting task:', error);
                this.showToast('Error', 'Failed to delete task.', 'error');
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
