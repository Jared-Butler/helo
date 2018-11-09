import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password:'',
            id: '',
            picture: ''
        }
    }

    updateUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    login = async () => {
        if (!this.state.username || !this.state.password) return alert('Please fill out username and password.')

        let res = await axios.post('/auth/login', {
            username: this.state.username,
            password: this.state.password
        })

        if (res.data.status === 'loggedIn') {
            console.log(res.data);
            this.setState({
                username: res.data.username,
                id: res.data.id,
                picture: res.data.picture,
                password: ''
            });
            console.log(this.state);
            this.props.history.push('/dashboard')
        }
        else { alert(res.data) }
    }


    register = async () => {
        if (!this.state.username || !this.state.password) return alert('Please fill out username and password.')

        let res = await axios.post('/auth/register', {
            username: this.state.username,
            password: this.state.password
        })

        if (res.data.status === 'loggedIn') {
            this.props.history.push('/dashboard')
        }
        else { alert(res.data) }

    }

    render() {
        return (
            <div>

                <div>
                    <h3>Username</h3>
                    <br />
                    <input onChange={this.updateUsername} />
                </div>
                <div>
                </div>
                <h3>Password</h3>
                <br />
                <input onChange={this.updatePassword} />
                <br />
                <button onClick={() => { this.login() }} type='button'>Login</button>
                <button onClick={() => { this.register() }} type='button'>Register</button>


            </div>
        )
    }
}

export default Auth;