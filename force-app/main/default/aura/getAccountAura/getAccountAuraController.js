({
    handleDataFromLWC: function(component, event, helper) {
        // Get the accounts data sent from LWC
        var accounts = event.getParam('detail');
        
        // Set it to Aura component attribute
        component.set('v.accounts', accounts);
    }
})