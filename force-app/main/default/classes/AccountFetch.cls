public with sharing class AccountFetch {
    @AuraEnabled(cacheable=true)
    public static List<Account> methodName(){
        try {
            return [select Id,Name from Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}