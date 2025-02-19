import { LightningElement } from 'lwc';

export default class ChildOfChildToParent extends LightningElement {
    handleonclick()
    {
        this.dispatchEvent(new CustomEvent('increasecount'));
    }
}