import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "../Redux/todoSlice";
import {  Form } from "react-bootstrap";



const Home = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
    <div className="container" >
      <h1>ToDo List</h1>
      <input className="text" type="text" value={text} onChange={handleInputChange} />{" "}
      <button className="btn" onClick={handleAddTodo}> Add Todo </button>{" "}
      <ul className="list">
        {" "}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}{" "}
            <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
              {" "}
              {todo.completed ? "Complete" : "Complete"}{" "}
            {" "}
            <button className="dlt" onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
    </>
  );
};

export default Home;