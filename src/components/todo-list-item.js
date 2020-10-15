import React from 'react';

const TodoListItem = ({label, important = false}) => {

    const listStyle = {
        color: important ? 'tomato' : 'black',
    }
    return (
    <span style={listStyle}>{label}</span>
  
    )
  };

  export default TodoListItem;