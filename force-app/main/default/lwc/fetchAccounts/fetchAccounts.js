import { LightningElement,wire } from 'lwc';
import getAccountsFromApex from '@salesforce/apex/AccountFetch.methodName';
export default class FetchAccounts extends LightningElement {
    accountsToDisplay=[];
    columns=[
     {label:'Account Name',fieldName:'Name'},
     {label:'Account Id',fieldName:'Id'}
    ];
    error;
    @wire(getAccountsFromApex)
    handleFetchAccounts({data,error})
    {
        if(data)
        {
          this.accountsToDisplay=data;
          this.error=undefined;
        }
        if(error)
        {
            this.error=error;
            this.accountsToDisplay=undefined;
        }
    }
}