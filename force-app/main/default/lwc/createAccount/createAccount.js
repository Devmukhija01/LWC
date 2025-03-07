import { LightningElement} from 'lwc';
import createAccount from '@salesforce/apex/createAccount.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateAccount extends LightningElement {
    name='';
    industry='';
    handleAccountName(event)
    {
        this.name=event.target.value;
    }
    handleIndustry(event)
    {
        this.industry=event.target.value;
    }
    handleClick()
    {
        try{
            createAccount({accountName:this.name,industry:this.industry});
            this.showToast('Success','Account Created SuccessFully','Success');
        }
        catch(error)
        {
            this.showToast('Not Created','Account Not Created','Error');
        }
    }
    showToast(title,message,variant)
    {
        this.dispatchEvent(new ShowToastEvent({title,message,variant}));
    }
}