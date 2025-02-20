import { LightningElement , track} from 'lwc';

export default class StudentRegistrationFormUsingTrack extends LightningElement {
    //Primitive Properties
    firstName='';
    lastName='';
    email='';
    //Non-Primitive Properties
    studentData={};
    //Non-Primitive Properties Using Track
    @track reactiveStudentData={};
    
    handleFirstNameChange(event)
    {
        console.log('FirstName is Updating');
     this.firstName=event.target.value;
     //this.studentData.firstName=event.target.value;
     this.reactiveStudentData.firstName=event.target.value;
    }
    handleLastNameChange(event)
    {
    console.log('LastName is Updating');
    this.lastName=event.target.value;
    //this.studentData.lastName=event.target.value;
    this.reactiveStudentData.lastName=event.target.value;
    }
    handleEmailChange(event)
    {
        console.log('Email is Updating');
    this.email=event.target.value;
    //this.studentData.email=event.target.value;
    this.reactiveStudentData.email=event.target.value;
    }
}