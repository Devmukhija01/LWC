public with sharing class AccountControl {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(){
        try {
            return [SELECT Id, Name , AnnualRevenue FROM Account LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}