import { LightningElement,api} from 'lwc';

export default class ChildOfParentToChildUsingApiFunction extends LightningElement {
    timeStamp=new Date();
    @api refresh()
    {
        this.timeStamp=new Date();
    }
}