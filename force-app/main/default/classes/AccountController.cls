public class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        try {
            // Querying Account records
            return [SELECT Id, Name FROM Account LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException('Error retrieving Accounts: ' + e.getMessage());
        }
    }
}