import React, {Component} from 'react';
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import Login from './components/Login'
import Logout from './components/Logout'
import NavBar from './components/NavBar'


class App extends Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
      const {loggedIn} = this.props

      return (
        <div className="App">
        {loggedIn ? <Logout /> : null}
        {this.props.user ? <strong> Welcome {this.props.user.name}</strong> : ""}
          <NavBar cards={this.props.cards }/>
        </div>
      );
    }
  }

  const mapState = state => {
    return {
      loggedIn: !!state.user,
      user: state.user,
      cards: state.cookieCards
    }
  }

export default connect(mapState, {getCurrentUser})(App);
