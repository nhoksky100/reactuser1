import React, { Component } from 'react';
import dulieu from '../dulieu.json';
//import Home from '../Home.js';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 0
        }
    }
    // warning = (war) => { alert(war); }
    // randerbutton = () => (
    //     <div className="row">
    //         <div className="btn btn-group">
    //             <div className="btn btn-warning" onClick={() => this.warningClick()}>Click warning</div>
    //             <div className="btn btn-info" >Click infor</div>
    //         </div>

    //     </div>
    // )


    // randerform = () => (
    //     <div className="row">
    //         <div className="form-group">

    //             <input type="text" ref={(data) => this.tg = data} defaultValue={this.props.tieude} name="username" className="form-control" />
    //             <div type="button" className="btn btn-outline-success" onClick={() => this.SuccessClick()}>Success</div>
    //         </div>
    //     </div>
    // )
    // check = () => {
    //     if (this.state.trangthai === 0) {
    //         return this.randerbutton();
    //     } else {
    //         return this.randerform();
    //     }
    // }
    // warningClick = () => {
    //     this.setState({ trangthai: 1 })
    // }
    // SuccessClick = () => {
    //     this.setState({ trangthai: 0 })
    //     console.log(this.tg.value);
    // }

    render() {


        //  console.log(this.props.match.params.id);

        return (
            <div className="conteiner">
                <div className="row">

                    {/* <section>
                    <div className="container">
                        <div className="row align-items-center">
                       
                            <div className={"col-lg-6 " + this.props.vitri1}>
                                <div className="p-5">
                                  <Link to={"/Signup/"+this.props.tieude +".html"}>  <img className="img-fluid rounded-circle" src={this.props.anh} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.tieude}</h2>
                                    <p>{this.props.noidung}</p>
                                </div>
                                {this.check()}
                            </div>

                        </div>
                    </div>
                </section> */}
                    {
                        dulieu.map((value, key) => {

                            if (value.id === parseInt(this.props.match.params.id)) {


                                return (
                                    <div className="card-columns " key={key}>
                                        <div className="card">
                                            <img className="card-img-top " src={value.image} alt="" />
                                            <div className="card-body">



                                            </div>

                                        </div>
                                        <div className="card text-center">
                                            <h4 className="card-title text-center">{value.title}</h4>
                                            <p className="card-text ">{value.content}</p>
                                        </div>
                                    </div>
                                )
                            } else if (value.id === null) { return false }
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Content;