import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    constructor()
    {
        super();
        console.log('Grand Parent Constructor Called');
    }
    connectedCallback()
    {
        console.log('Grand Parent Connected CallBack Called');
    }
    disconnectedCallback()
    {
        console.log('Grand Parent Connected CallBack Called');
    }
    renderedCallback()
    {
        console.log('Grand Parent Rendered Callback Called');
    }
}