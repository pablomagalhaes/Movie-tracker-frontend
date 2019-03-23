import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';

export const MovieContainer = (props) => {
  const movieCards = props.movies.map(movie => {
    return <Card cardInfo={movie} key={movie.id}/> 
  });

  if(Object.keys(props.user).length === 0) { 
    let user = JSON.parse(localStorage.getItem('movieTrackerUser'));
    if (user) {
      props.loginUser(user.id, user.name);
      return <Redirect to='/movies'/>;
    } else {
      return <Redirect to='/sign-in'/>;
    }
  }
  
  const logoutUser = () => {
    localStorage.removeItem('movieTrackerUser');
    window.location.reload(true);
  }
  
  return (
    <section className="movies-container">
      <button onClick={logoutUser}>Logout</button>
      <div className="row">
        <div className="row__inner">
          {movieCards}
        </div>
      </div>
    </section>
  )
};

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.loginUser
});

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (id, name) => dispatch(loginUser(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
