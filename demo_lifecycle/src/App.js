import React, { Component } from 'react';

import './App.css';
import Content from './Content.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { TrangThai: 'khaibao',TrangThai2:'tenbutton' }
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('toi la shouldComponentUpdate' + nextState.TrangThai); //khi click tra ve true start 1
    return true;

  }
  componentWillUpdate(nextProps, nextState) {
    console.log('toi la will uppdate'); //start 2

  }


  componentDidUpdate(prevProps, prevState) {
    console.log('toi la did uppdate');//start 4
  }
  componentWillMount() {

    console.log('componentWillMount');// start 1 mount

  }
  componentDidMount() {
    console.log('toi la componentDidMount'); //start 3 mount
  }
 CheckState = ()=>{
   this.setState({TrangThai:"thanh tinh"});
 }
  render() {  //start 3 update , start 2 mount
    console.log('toi la renders');
    console.log(this.state.TrangThai); // start 3 update

    return (
      <div className="App">
        <h1>hello </h1>
        <div className="row">
            <div className="btn btn-group">
            <button type="button" className="btn btn-outline-primary" onClick={()=>this.CheckState()}>Button</button>
            </div>
          <Content tenh3={this.state.TrangThai2}/>
        </div>

      </div>
    );
  }
}





export default App;
