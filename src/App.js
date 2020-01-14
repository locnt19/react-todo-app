import React, { Component } from 'react';
import TodoItem from './components/TodoItem/TodoItem';

import logo from './logo.svg';
import tick from './assets/images/tick.png';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: "Viết App", isComplete: true },
        { title: "Viết App 2", isComplete: false },
        { title: "Viết App 3", isComplete: false }
      ]
    }

    // === FIX ERROR ===
    // TypeError: Cannot read property 'setSate' of undefined
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  // Handling events
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          // Immuability Array
          ...todoItems.slice(0, index), // Copy phần tử đầu tiên đến phần tử đứng trước `item được click`
          {
            ...item, // Copy toàn bộ giá trị của `item được click`, chỉ thay đổi giá trị `isComplete`
            isComplete: !isComplete // Đảo giá trị
          },
          ...todoItems.slice(index + 1) // Copy phần tử đứng sau `item được click` đến hết mảng
        ]
      })
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  onKeyUp(event) {
    // console.log(event.keyCode);
    // console.log(event.target.value);

    if (event.keyCode === 13) { // Enter key code
      let text = event.target.value;
      if (!text) { return; }
      text = text.trim();
      if (!text) { return; }

      this.setState({
        newItem: '',
        todoItems: [ // Immuability Array
          {
            title: text,
            isComplete: false
          },
          ...this.state.todoItems // Copy tất cả phần tử của mảng todoItems
        ]
      })
    }
  }

  render() {

    const { todoItems, newItem } = this.state;

    // Conditional Rendering (AND..OR)
    return (
      <aside className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo react" />
          <h1>Todo App</h1>
        </header>
        <section className="todo-container">
          <aside className="todo-list">
            <section className="todo-header">
              <img className="check-all" src={tick} width={32} height={32} alt="check all" />
              <input type="text" placeholder="Add new item"
                className="new-item"
                value={newItem}
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}
              />
            </section>
            <section className="todo-content">
              {
                todoItems.length > 0 && todoItems.map((item, index) => (
                  <TodoItem
                    key={index}
                    item={item}
                    onItemClicked={this.onItemClicked(item)}
                  />
                ))
              }
              {
                todoItems.length === 0 &&
                <div className="todo-item">
                  <span>Nothing here.</span>
                </div>
              }
            </section>
          </aside>
        </section>
      </aside>
    )
  }
}

export default App;
