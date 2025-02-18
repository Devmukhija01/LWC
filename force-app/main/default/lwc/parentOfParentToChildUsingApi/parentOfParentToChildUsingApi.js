import { LightningElement } from 'lwc';

export default class ParentOfParentToChildusingApi extends LightningElement {
    percentage=20;
    handleChange(event)
    {
        this.percentage=event.target.value;
    }
}