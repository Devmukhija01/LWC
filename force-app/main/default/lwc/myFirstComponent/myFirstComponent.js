import { LightningElement,track} from 'lwc';

export default class MyFirstComponent extends LightningElement {
    @track person={
        name:'Dev',
        age:30
    };
    handleChange()
    {
        console.log(person.name);
        this.person.name='Akshat';
        console.log(person.name);
    }
}