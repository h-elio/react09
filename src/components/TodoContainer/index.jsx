import React from "react";
import "./index.css";

const TodoContainer = ({ todo, setTodo }) => {
    if (todo === undefined) {
        return (
            <div className="EmptyContainer">
                <h1>할 일이 없습니다.</h1>
                <p>새로운 할 일을 추가해 보세요.</p>
            </div>
        );
    }
    return (
        <div className="TodoContainer">
            <div>
                <input
                    type="text"
                    className="TodoContainer_title"
                    value={todo.title}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <textarea
                    className="TodoContainer_body"
                    value={todo.content}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            content: e.target.value,
                        });
                    }}
                ></textarea>
            </div>
        </div>
    );
};

export default TodoContainer;
