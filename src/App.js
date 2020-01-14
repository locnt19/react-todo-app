import React, { Component } from 'react';
import TodoItem from './components/TodoItem/TodoItem';

import logo from './logo.svg';
import tick from './assets/images/tick.png';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.todoItems = [
      { title: "Viết App", isComplete: true },
      { title: "Viết App 2", isComplete: false },
      { title: "Viết App 3", isComplete: false }
    ]
  }
  render() {
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
              <input type="text" className="new-item" placeholder="Add new item" />
            </section>
            <section className="todo-content">
              {
                this.todoItems.length > 0 && this.todoItems.map((item, index) => (
                  <TodoItem key={index} item={item} />
                ))
              }
              {
                this.todoItems.length === 0 &&
                <div className="todo-item">
                  <span>Nothing here.</span>
                </div>
              }
            </section>
          </aside>
        </section>
      </aside>
    )


    // Conditional Rendering (if..else)
    // if (this.todoItems.length) {
    //   return (
    //     <aside className="App">
    //       <header className="App-header">
    //         <img className="App-logo" src={logo} alt="logo react" />
    //         <h1>Todo App</h1>
    //       </header>
    //       <section className="todo-container">
    //         <aside className="todo-list">
    //           <section className="todo-header">
    //             <img className="check-all" src={tick} width={32} height={32} alt="check all" />
    //             <input type="text" className="new-item" placeholder="Add new item" />
    //           </section>
    //           <section className="todo-content">
    //             {
    //               this.todoItems.map((item, index) =>
    //                 <TodoItem key={index} item={item} />
    //               )
    //             }
    //           </section>
    //         </aside>
    //       </section>
    //     </aside>
    //   )
    // } else {
    //   return (
    //     <p>Nothing here.</p>
    //   )
    // }
  }
}

export default App;
