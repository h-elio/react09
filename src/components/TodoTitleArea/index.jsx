import React from "react";
import TodoList from "../TodoList";
import TodoAddBtn from "../TodoAddBtn";
import "./index.css";

const TodoTitleArea = ({
    todos,
    selectedTodoIndex,
    setSelectedTodoIndex,
    addTodo,
    deleteTodo,
}) => {
    return (
        <div className="TodoTitleArea">
            <h1>Planner</h1>
            <TodoList
                todos={todos}
                setSelectedTodoIndex={setSelectedTodoIndex}
                selectedTodoIndex={selectedTodoIndex}
                deleteTodo={deleteTodo}
            />
            <TodoAddBtn onClick={addTodo} />
        </div>
    );
};

export default TodoTitleArea;
