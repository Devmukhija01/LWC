import { LightningElement } from 'lwc';

export default class BindHTMLDynamicGetterExpressionApexHours extends LightningElement {
    //myValue='';
    firstName='';
    lastName='';
    handleChange(event)
    {
        const field=event.target.name;
        if(field==='firstName')
        {
            this.firstName=event.target.value;
            //this.myValue=event.target.value.toUpperCase();
        }
        else if(field==='lastName')
        {
            this.lastName=event.target.value;
            //this.myValue=event.target.value.toUpperCase();
        }
    }
    get upperCaseName()
    {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}