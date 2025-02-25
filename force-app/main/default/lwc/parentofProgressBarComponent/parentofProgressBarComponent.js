import { LightningElement } from 'lwc';

export default class ProgressBarComponent extends LightningElement {
    value=20;
    handleProgressBarChange(event)
    {
     this.value=event.target.value;
    }
}