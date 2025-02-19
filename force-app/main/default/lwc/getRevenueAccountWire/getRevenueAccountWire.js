import { LightningElement,wire } from 'lwc';
import getRevenueAccountsWire from '@salesforce/apex/AccountControl.getAccounts';
export default class GetRevenueAccountWire extends LightningElement {
    accountsToDisplay=[];
    @wire(getRevenueAccountsWire)
    getAccountsHandler(response)
    {
        // error.... data..... response consist these 2 parameters
        //case1: error:undefined  Data.....
        //case2: error..... data:undefined
        const {data,error}=response;
        if(error)
        {
            console.error(error);
            return;
        }
        if(data)
        {
            this.accountsToDisplay=data;
        }
    }
}