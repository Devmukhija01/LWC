import { LightningElement } from 'lwc';

export default class AnotherChild extends LightningElement {
    constructor()
    {
        super();
        console.log('Another Child Constructor Called');
    }
    connectedCallback()
    {
        console.log('Another Child Connected CallBack Called');
    }
    disconnectedCallback()
    {
        console.log('Another Child Connected CallBack Called');
    }
    renderedCallback()
    {
        console.log('Another Child Rendered Callback Called');
    }
}