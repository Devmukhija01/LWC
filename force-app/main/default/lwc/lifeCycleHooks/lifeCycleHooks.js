import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {  
    constructor()
    {
        super();
        console.log('Constructor Called');
    }
    connectedCallback()
    {
        console.log('Connected CallBack Called');
    }
    disconnectedCallback()
    {
        console.log('Connected CallBack Called');
    }
    renderedCallback()
    {
        console.log('Rendered Callback Called');
    }
}