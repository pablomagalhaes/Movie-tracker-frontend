import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  fetchUsers = async () => {
    const userInfo = this.state;
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }
    const userDatabase = 'http://localhost:3000/api/users';
    const response = await fetch(userDatabase, options);
    if(response.ok) {
      const user = await response.json();
      return user.data
    } else {
      return 'Incorrect email/password combination'
    }
  }

  validateUser = async (e) => {
    e.preventDefault()
    const user = await this.fetchUsers();
    if(typeof user === 'object') {     
      this.props.loginUser(true);
    } else {
      this.setState({ error: user });
    }
  }

  saveInput = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {

    
    return (
      <div className='sign-in-container'>
        <section>
          <form className='sign-in' onSubmit={this.validateUser}>
            <div>
              <label>Email</label>
              <i className="fas fa-envelope"></i>
            </div>
            <input type='email' name='email' value={this.state.email} placeholder='email@example.com' onChange={this.saveInput} autoComplete="off"/>
            <div>
              <label>Password</label>
              <i className="fas fa-lock"></i>
            </div>
            <input type='password' name='password' value={this.state.password} placeholder='password' onChange={this.saveInput} autoComplete="off"/>
            <input type='submit'/>
          </form>
          <NavLink className='sign-up' to='/sign-up'>Sign Up</NavLink>
          { this.state.error && this.state.error } 
        </section>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (loggedIn) => dispatch(loginUser(loggedIn))
});

export default connect(null, mapDispatchToProps)(SignIn);