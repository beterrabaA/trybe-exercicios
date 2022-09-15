import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  validator = () => {
    const { textTodo } = this.state;

    return !textTodo.length > 0;
  }

  addItem(value) {
    const { addTodo } = this.props;

    this.setState({ textTodo: '' });
    addTodo(value);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  render() {
    const { textTodo } = this.state;
    return (
      <section className="InputTodo">
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            id="inputTodo"
            type="text"
            value={ textTodo }
            onChange={ (e) => this.changeTextTodo(e.target.value) }
          />
        </label>
        <button
          type="button"
          disabled={ this.validator() }
          onClick={ () => this.addItem(textTodo) }
        >
          Adicionar
        </button>
      </section>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
