// lwcComponent.js
import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    accounts;
    error;

    // Fetch Accounts from Apex class
    @wire(getAccounts)
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
            // Dispatch data to Aura component
            this.dispatchEvent(new CustomEvent('senddata', { 
                detail: this.accounts 
            }));
        } else if (error) {
            this.error = error;
        }
    }
}