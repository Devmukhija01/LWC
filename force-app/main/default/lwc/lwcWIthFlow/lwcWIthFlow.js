import {LightningElement} from 'lwc';

export default class LwcWIthFlow extends LightningElement {
    name='';
    handleChange(event)
    {
      this.name=event.target.value;
    }

}