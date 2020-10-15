import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 100;
    this.state = {
      todoData: [
        this.createItem("Drink coffe"),
        this.createItem("Builad App"),
        this.createItem("Have a lunch"),
      ],
    };
  }

  createItem(label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false,
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
    this.setState(({ todoData }) => {
      const ind = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, ind), ...todoData.slice(ind + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createItem(text);
    this.setState(({ todoData }) => {
      const todos = [...todoData, newItem];
      return {
        todoData: todos,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "important"),
        };
      });
  
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const itemInd = arr.findIndex((todo) => todo.id === id);
    const newItem = { ...arr[itemInd], [propName]: !arr[itemInd][propName] };
    return [...arr.slice(0, itemInd), newItem, ...arr.slice(itemInd + 1)];
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((todo) => todo.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAddItem={this.addItem} />
      </div>
    );
  }
}
