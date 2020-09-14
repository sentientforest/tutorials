import Array "mo:base/Array";
import Nat "mo:base/Nat";

type ToDo = {
    id: Nat;
    description: Text;
    completed: Bool;
};

func add(todos : [ToDo], desc : Text, nextId : Nat) : [ToDo] {
    let todo : ToDo = {
        id = nextId;
        description = desc;
        completed = false;
    };
    Array.append<ToDo>(todos, [todo]) 
};

func show(todos : [ToDo]) : Text {
    var output : Text = "\n___To-DOs___";
    for (todo : ToDo in todos.vals()) {
        output #= "\n(" # Nat.toText(todo.id) # ") " # todo.description;
        if (todo.completed) { output #= " ✔"; };
    };
    output 
};

actor Assistant {
    stable var todos : [ToDo] = [];
    stable var nextId : Nat = 1;

    public func addTodo (description : Text) : async () {
        todos := add(todos, description, nextId);
        nextId += 1;
    };

    public query func showTodos () : async Text {
        show(todos)
    };
};