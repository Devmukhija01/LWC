import { LightningElement,wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountControl.getAccounts';
export default class ShowAccountListRealExample extends LightningElement {
    @wire(getAccounts) accounts;
    handleClick({data,error})
    {
       if(data){
        this.accountsToDisplay=accounts;
       }
       if(error)
       {
        console.error('Error'+error);
       }
    }
}