import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: "Drink coffe", important: false, id: 1 },
        { label: "Builad App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 },
      ],
    };

  }

  deleteItem = (id) => {
// one way
    // const todos = this.state.todoData.filter((item) => {
    //     return item.id !== id
    // });

    // this.setState(() => {
    //     return {
    //         todoData: todos
    //     }
    // })

    // 2 way
    this.setState(({todoData}) => {
        const ind = todoData.findIndex((el) => el.id === id);
        const newArray = [...todoData.slice(0, ind), ...todoData.slice(ind+1)];
        return {
            todoData: newArray,
        }

    });
  }

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
        />
      </div>
    );
  }
}
