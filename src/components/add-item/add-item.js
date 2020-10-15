import React, { Component } from "react";
import "./add-item.css";

class AddItem extends Component {
  
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    console.log(e.target.value);
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <form className="add-item d-flex" noValidate onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control input-text"
          onChange={this.onLabelChange}
          placeholder="Whats"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
