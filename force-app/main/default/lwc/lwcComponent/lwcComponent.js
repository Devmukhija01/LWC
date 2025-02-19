import { LightningElement,api } from 'lwc';

export default class LwcComponent extends LightningElement {
    @api name;

    @api callMe()
    {
        console.log('Hello,Dev Mukhija');
    }
}