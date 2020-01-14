import React, { Component } from 'react';
// import classNames from 'classnames';

import check from '../../assets/images/check.png';

import './TodoItem.css';

class TodoItem extends Component {
  render() {

    const { item } = this.props;

    return (
      <div className="todo-item">
        <img className="check" src={check} witdh={32} height={32} alt="check" />
        <span>{item.title}</span>
      </div>
    )
  }
}

export default TodoItem;