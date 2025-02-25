public with sharing class ToDoList {
    @AuraEnabled(cacheable=true)
    public static list<task> methodName(){
        try {
             return [select subject,priority from task];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static void taskCreation(String taskName,String taskPriority)
    {
      Task tsk = new Task();
      tsk.Subject=taskName;
      tsk.Priority=taskPriority;
      insert tsk;
    }
}