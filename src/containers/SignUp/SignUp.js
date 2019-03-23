import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      error: ''
    }
  }

  addUserToDatabase = async (event) => {
    event.preventDefault();
    const userInfo = this.state;
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }
    const userDatabase = 'http://localhost:3000/api/users/new';
    const response = await fetch(userDatabase, options);
    if(response.ok) {
      const data = await response.json();
      return data;
    } else {
      return 'Please fill out form'
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
    return(
      <div className='sign-up-container'>
        <section>
          <form className='sign-up-form' onChange={this.saveInput} onSubmit={this.addUserToDatabase}>
            <div>
              <label>Name</label>
              <i className="fas fa-user"></i>
            </div>
            <input name='name' type='text' placeholder='Name' autoComplete="off"/>
            <div>
              <label>Email</label>
              <i className="fas fa-envelope"></i>            
            </div>
            <input name='email' type='email' placeholder='email@example.com' autoComplete="off"/>
            <div>
              <label>Password</label>
              <i className="fas fa-lock"></i>          
            </div>
            <input name='password' type='password' placeholder='password' autoComplete="off"/>
            <input type='submit'/>
          </form>
          <NavLink className='sign-in-btn' to='/sign-in'>Already have an account? Sign in</NavLink>        
        </section>
      </div>
    )
  }
}

export default SignUp