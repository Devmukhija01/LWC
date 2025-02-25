import { LightningElement } from 'lwc';

export default class newLwcFlow extends LightningElement {
    name = ''; // Variable to store user input
    userInfo = {}; // Variable to store the name to be displayed
    phone='';
    address='';
    // Handler for input change
    handlenameInputChange(event) {
        this.name = event.target.value;
    }
    handlephoneInputChange(event) {
        this.phone = event.target.value;
    }
    handleaddressInputChange(event) {
        this.address = event.target.value;
    }
    // Handler for button click
    handleButtonClick() {
        this.userInfo={
            name:this.name,
            phoneNo:this.phone,
            address:this.address
        }; // Set userName to the input value
    }
}