import { LightningElement } from 'lwc';

export default class ConditionalRenderingApexHours extends LightningElement {
    showMe=false;
    handleChange(event)
    {
        this.showMe=event.target.checked;
    }
}