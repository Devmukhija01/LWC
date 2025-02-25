import Description from '@salesforce/schema/Account.Description';
import City from '@salesforce/schema/Asset.City';
import Country from '@salesforce/schema/Asset.Country';
import PostalCode from '@salesforce/schema/Asset.PostalCode';
import State from '@salesforce/schema/Asset.State';
import { LightningElement } from 'lwc';

export default class MapLWC extends LightningElement {
    mapMarkers;
    connectedCallback()
    {
        this.mapMarkers=[{
            location:{
                City:"Jaipur",
                Country:"India",
                PostalCode:"302017",
                Street:"Jagatpura",
                State:"RJ"
            },
            title:"Dev Mukhija",
            description:"I am Here",
            icon:"standard:account"
        },{
            location:{
                City:"Tilak Nagar",
                Country:"India",
                State:"DL"
            },
            title:"Akshat Porwal",
            description:"I am Here",
            icon:"standard:account"
        }]
    }
}