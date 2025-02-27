public with sharing class ToDoList {
    
    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks() {
        return [SELECT Id, Subject, Description, Status, Priority FROM Task];
    }

    @AuraEnabled
    public static Task createTask(String subject, String description) {
        Task newTask = new Task(Subject = subject, Description = description, Status = 'Not Started',Priority = 'High');
        insert newTask;
        return newTask;
    }

    @AuraEnabled
    public static void deleteTask(Id taskId) {
        delete [SELECT Id FROM Task WHERE Id = :taskId];
    }
}
