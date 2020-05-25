import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function X() { // tu dinh nghia function
  return (
    <div><h1>ok h1 div</h1></div>
  )
}
var arr= [1,2,3,4,5,7,8,9];
var so = arr.map((a)=>a+1);
var Ham = (props) =>
  (
    <div>
      <h4 className="tieude-card">{props.tieude}</h4>
      <img src={props.linkanh} />
          <li>{so}</li>
    </div>
  ); // tu dinh nghia function arrow
class Game extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="card">
          <img className="card-img-top" src={this.props.linkanh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.props.tieude}</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <div className="row">
                <Game tieude="tieu de 1" linkanh='data:image/jpeg;base64,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' />
                <Game tieude="tieu de 2" linkanh='data:image/jpeg;base64,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' />
                <Game tieude="tieu de 3" linkanh='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHQ4TnWieqvIWKsTKfwDBf3dHglhDWyECovd0_57bm3exJjb38&usqp=CAU' />
          </div>
          <div><Ham /></div>
        </div>
      </div>

    );
  }

}

export default App;