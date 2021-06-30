export class Model {
    user;
    items;

    constructor(){
        this.user = "Serhat";
        this.items = [
            new TodoItem("Spor", false),
            new TodoItem("Kahvaltı", true),
            new TodoItem("Fatura", false),
            new TodoItem("Sinema", true),
            new TodoItem("Hamburger", false),
        ]
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action){
        this.description = description;
        this.action=action;
    }
}