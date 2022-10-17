import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        red: false,
        blue: false,
        yellow: false,
    };
    this.mudaCor = this.mudaCor.bind(this);
  }
  mudaCor = (cor,boll) => this.setState({[cor]:boll}) 
  render() {
    const color = { clicado: this.state, funcao: this.mudaCor };
    return (
    <MyContext.Provider value={color}>
      <Cars />
    </MyContext.Provider>
  )
}
}

export default App;
