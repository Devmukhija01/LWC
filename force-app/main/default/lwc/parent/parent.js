import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    constructor()
    {
        super();
        console.log('Parent Constructor Called');
    }
    connectedCallback()
    {
        console.log('Parent Connected CallBack Called');
    }
    disconnectedCallback()
    {
        console.log('Parent DisConnected CallBack Called');
    }
    renderedCallback()
    {
        console.log('Parent Rendered Callback Called');
    }
}