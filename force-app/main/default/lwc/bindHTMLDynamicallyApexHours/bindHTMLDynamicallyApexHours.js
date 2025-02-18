import { LightningElement } from 'lwc';

export default class BindHTMLDynamicallyApexHours extends LightningElement {
    myValue='Dev Mukhija';
    handleChange(event)
    {
       this.myValue=event.target.value;
    }
}