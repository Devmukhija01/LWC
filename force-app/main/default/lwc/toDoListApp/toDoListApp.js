import { LightningElement } from 'lwc';
import gettasks from '@salesforce/apex/ToDoList.methodName';
import newtaskcreated from '@salesforce/apex/ToDoList.taskCreation';
export default class ToDoListApp extends LightningElement {
    name='';
    priority='';
//    @wire(gettasks)
//    handleTasks({data,error})
//    {

//    }
   handleEnterTask(event)
   {
    const field=event.target.value;
    if(field==='name')
    {
        this.name=event.target.value;
    }
    else if(field==='priority')
    {
        this.priority=event.target.value;
    }
   }
   handleAddTask()
   {
    newtaskcreated({
        taskName : this.name,
        taskPriority:this.priority

    })
    
   }
}