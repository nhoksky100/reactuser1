import React from 'react';
//import logo from './logo.svg';
import './css/App.css';
import MenuTop from './Component/MenuTop/MenuTop.js';
import Header from './Component/Header/Header.js';
//import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer.js';
import { BrowserRouter as Router,  Route, } from "react-router-dom";
import DieuhuongUrl from './router/DieuhuongUrl';



function App() {
  return (
    <div className="App_1">
      <Router>
        <MenuTop />
        <Header />
         {/* <Content tieude="tieude 1" vitri1="order-lg-2" anh="img/01.jpg" noidung="day la doi dung 1 " />
        <Content tieude="tieude 2" anh="img/02.jpg" noidung="day la doi dung 2 " />
        <Content tieude="tieude 3" vitri1="order-lg-2" anh="img/03.jpg" noidung="day la doi dung 3 " />  */}
        <DieuhuongUrl/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
