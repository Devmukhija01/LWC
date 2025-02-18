import { LightningElement } from 'lwc';

export default class ParentOfParentToChildUsingApiFunction extends LightningElement {
    handleClick()
    {
        this.template.querySelector('c-child-of-parent-to-child-using-api-function').refresh();
    }
}