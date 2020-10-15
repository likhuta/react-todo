import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {

    

const elements = todos.map((todo) => {
    const { id, ...itemProps} = todo;
    return <li key={id}>  <TodoListItem  {...itemProps}  /> </li>
}  )
    return (
      <ul>
          {elements}
      </ul>
  
    )
  }

  export default TodoList;