import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {

    state = {
        activeMode: 'all'
    }

    switchMode(mode) {
        this.props.omSwitchMode(mode);
        this.setState({
            activeMode: mode
        })
    }

    createClassName(mode) {
        const selectedMode = 'btn btn-info'
        const unSelectedMode = 'btn btn-outline-secondary'
        return this.state.activeMode === mode ? selectedMode : unSelectedMode;
    }

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          onClick={() => this.switchMode("all")}
          className={this.createClassName('all')}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => this.switchMode("active")}
          className={this.createClassName('active')}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => this.switchMode("done")}
          className={this.createClassName('done')}
        >
          Done
        </button>
      </div>
    );
  }
}
