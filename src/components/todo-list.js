import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {

    

const elements = todos.map((todo) => {
    const { id, ...itemProps} = todo;
    return <li className="list-group-item" key={id}>  <TodoListItem  {...itemProps}  /> </li>
}  )
    return (
      <ul className="list-group todo-list">
          {elements}
      </ul>
  
    )
  }

  export default TodoList;