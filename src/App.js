import logo from './logo.svg';
import './App.css';
import  React , { Component } from 'react';
import { connect } from 'react-redux';
import { set_data } from './store/action';

class App extends Component{
  render(){
    console.log("redux-data=> ", this.props);
    return(
      <div>
        <button onClick={() => this.props.set_data("Yaha se bh data jaskta hai")}>Set Data</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
    {
      username: state.auth.userName,
      email : state.auth.email,
      app : state.app.app_name
  }
)

const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
