import { LightningElement,api } from 'lwc';

export default class ChildOfParentToChildUsingApi extends LightningElement {
    @api percentage;
    get myStyle()
    {
        return `background-color:red; min-height:50px; width:${this.percentage}%; min-width:10px; border:1px solid black`;
    }
}