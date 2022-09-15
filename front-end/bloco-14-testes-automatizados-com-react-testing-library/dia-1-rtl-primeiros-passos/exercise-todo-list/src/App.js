import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  deleteCard = (index) => {
    const { listTodo } = this.state;
    listTodo.splice(index, 1);
    const ref = listTodo;
    this.setState({ listTodo: [...ref] });
  };

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  render() {
    const { listTodo } = this.state;
    return (
      <main className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>
              <Item content={ todo } />
              <button type="button" onClick={ () => this.deleteCard(index) }>
                Remover
              </button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}
export default App;
