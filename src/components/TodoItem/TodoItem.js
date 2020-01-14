import React, { Component } from 'react';
import classNames from 'classnames';

import check from '../../assets/images/check.png';
import checkDone from '../../assets/images/check-complete.png';

import './TodoItem.css';

class TodoItem extends Component {
  render() {

    const { item, onItemClicked } = this.props;
    let url = check;
    if (item.isComplete) {
      url = checkDone;
    }
    return (
      <div className={classNames('todo-item', {
        'todo-item__done': item.isComplete
      })}>
        <img onClick={onItemClicked} className="check" src={url} witdh={32} height={32} alt="check" />
        <span>{item.title}</span>
      </div>
    )
  }
}

export default TodoItem;