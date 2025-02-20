import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    constructor()
    {
        super();
        console.log('Child Constructor Called');
    }
    connectedCallback()
    {
        console.log('Child Connected CallBack Called');
    }
    disconnectedCallback()
    {
        console.log('Child Connected CallBack Called');
    }
    renderedCallback()
    {
        console.log('Child Rendered Callback Called');
    }
}