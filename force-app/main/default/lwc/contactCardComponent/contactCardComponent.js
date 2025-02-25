import { LightningElement,track } from 'lwc';

export default class ContactCardComponent extends LightningElement {
    @track contactInfo={
        name:'',
        phone:'',
        email:''
    };
    firstName='';
    lastName='';
    handleFirstNameChange(event)
    {
      this.firstName=event.target.value;
    }
    handleLastNameChange(event)
    {
      this.lastName=event.target.value;
    }
    handlePhoneChange(event)
    {
      this.phone=event.target.value;
    }
    handleEmailChange(event)
    {
      this.email=event.target.value;
    }
    get FullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
    handleSubmit()
    {
        this.contactInfo.name=this.FullName;
        this.contactInfo.phone=this.phone;
        this.contactInfo.email=this.email;
    }
}