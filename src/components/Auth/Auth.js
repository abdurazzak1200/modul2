import React, {Component} from 'react';
import firebase from "../../config/FbConfig";
import {connect} from 'react-redux';
import {getUserAuth, setUserLogout} from "../../store/action/news";

class Auth extends Component {
    state = {
        email: '',
        pass: '',
    };
    onChangeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onLogin = e => {
        e.preventDefault();
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.pass)
            .then(result => {
                const user = result.user;
                this.props.onUserAuth(user);
            })
            .catch(error => {
                console.log(error);
            })
    };


    render() {
        return (
            <form onSubmit={this.onLogin}>
                <h1 className="display-3 md-4">Авторизация</h1>
                <div className="form-group">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        name="pass"
                        onChange={this.onChangeHandler}
                        value={this.state.pass}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-danger">войти</button>
                </div>
            </form>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onUserAuth: (user) => dispatch(getUserAuth(user))
    }
};

export default connect(null, mapDispatchToProps)(Auth);