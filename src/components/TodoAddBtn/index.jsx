import React from "react";
import "./index.css";

const TodoAddBtn = ({ onClick }) => {
    return (
        <div className="TodoAddBtn">
            <button onClick={onClick}>ADD+</button>
        </div>
    );
};

export default TodoAddBtn;
