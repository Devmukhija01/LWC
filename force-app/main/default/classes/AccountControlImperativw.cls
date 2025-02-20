public with sharing class AccountControlImperativw {
    @AuraEnabled
    public static list<Account> getAccounts(Integer count){
        try {
            return [SELECT Id, Name , AnnualRevenue FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}