import React, { Component } from 'react';
import { BrowserRouter as Redirect, } from "react-router-dom";
//import Redirect from  'react-router-dom/Redirect';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,

        }
    }
    setForm = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;

        this.setState({
            [ten]: giatri
        })
    }
    submitForm = (event) => {
        event.preventDefault();

        this.setState({ isRedirect: true });
    }
    getForm = () => {
        var User = "";
        User += "username: " + this.state.username;
        User += "password: " + this.state.password;
        User += "file: " + this.state.file;
        return User;
    }
    setFile = (event) => {
        const ffile = event.target.files[0].name; // lay ten file
        this.setState({ file: ffile })

    }
    render() {
        if (this.state.isRedirect) {
            console.log(this.getForm());

            return <Redirect to="/Login" />

        }
        return (
            <div>

                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        {/* Tabs Titles */}
                        {/* Icon */}

                        <div className="fadeIn first">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8hsNOdWQcY3D8KhtqsfjzycZj-3ECpbDV7LN7BNNx6q0Jh-in&usqp=CAU" id="icon" alt="User Icon" />
                        </div>
                        {/* Login Form */}
                        <form noValidate="novalidate" >
                            <input type="text" onChange={(event) => this.setForm(event)} id="login" className="fadeIn second" name="username" placeholder="login" />
                            <input type="text" id="password" onChange={(event) => this.setForm(event)} className="fadeIn third" name="password" placeholder="password" />
                            <input type="submit" onClick={(event) => this.submitForm(event)} className="fadeIn fourth" defaultValue="Log In" />
                            <input type="file" onChange={(event) => this.setFile(event)} className="form-control-file" name="ffile" id="" placeholder="" aria-describedby="fileHelpId" />

                        </form>

                        {/* Remind Passowrd */}
                        <div id="formFooter">
                            <a className="underlineHover" href="/">Forgot Password?</a>

                        </div>
                    </div>

                </div>





            </div>
        );
    }
}

export default Login;