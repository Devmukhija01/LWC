public with sharing class createAccount {
    @AuraEnabled
    public static void createAccount(String accountName,String industry){
        try {
            Account newAccount=new Account();
            newAccount.Name=accountName;
            newAccount.Industry=industry;
            insert newAccount;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}