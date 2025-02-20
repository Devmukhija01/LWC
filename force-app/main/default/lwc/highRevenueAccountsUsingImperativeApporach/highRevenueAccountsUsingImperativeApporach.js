import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountControlImperativw.getAccounts';
export default class HighRevenueAccountsUsingImperativeCall extends LightningElement {
    accountsToDisplay=[];
    countOfRecords=5;
    connectedCallback()
    {
        getAccounts({count:this.countOfRecords})
        .then((response)=>{
          console.log('Response Using Imperative Approach 1',response);
          this.accountsToDisplay=response;
        })
        .catch((error)=>{
         console.error('Error',error);
        })
    }
    setCount(event)
    {
     console.log('Value',event.target.value);
     let inputValue=event.target.value;
     if(inputValue =='') return;
     this.countOfRecords=inputValue;
     getAccounts({count:this.countOfRecords})
        .then(response=>{
          console.log('Response Using Imperative Approach',response);
          this.accountsToDisplay=response;
        })
        .catch(error=>{
         console.error('Error',error);
        })
    }
}