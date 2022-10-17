import React from 'react';
import './App.css';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        red: false,
        blue: false,
        yellow: false,
        color: 'red'
    };
    this.mudaCor = this.mudaCor.bind(this);
    this.mudaSinal = this.mudaSinal.bind(this);
  }
  mudaCor = (cor,boll) => this.setState({[cor]:boll}) 
  mudaSinal = (cor) => this.setState({color:cor})
  render() {
    const color = { clicado: this.state, funcao: this.mudaCor,funcSinal: this.mudaSinal };
    return (
    <MyContext.Provider value={color}>
      <Cars />
      <TrafficSignal />
    </MyContext.Provider>
  )
}
}

export default App;