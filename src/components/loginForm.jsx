import React, { Component } from 'react';
class LoginForm extends Component {
    state = {
        account: { username: '', password: '' }
    }

    handleSubmit = e => {
        e.preventDefault();
        // Call the server
        // const username = this.username.current.value;
        console.log("Submitted");
    }
    handleChange = ({currentTarget: input}) => {
        const account = { ...this.state.account }
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { account } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="div form-group">
                        <div className="div form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                value={account.username}
                                onChange={this.handleChange}
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="div form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={account.password}
                                onChange={this.handleChange}
                                id="password"
                                name="password"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;