import React, { Component } from 'react';
class LoginForm extends Component {

    username = React.createRef();
    // componentDidMount() {
    //     this.username.current.focus();
    // }

    handleSubmit = e => {
        e.preventDefault();
        // Call the server
        const username = this.username.current.value;
        console.log("Submitted");
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="div form-group">
                        <div className="div form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                autoFocus
                                ref={this.username}
                                id="username"
                                type="text"
                                className="form-control" 
                            />
                        </div>
                        <div className="div form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="text" className="form-control" />
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;