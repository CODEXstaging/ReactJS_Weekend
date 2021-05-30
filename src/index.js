import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'
import IPL from './IPL';
import Showroom from './Showroom';
import Chocolate from './Chocolate';
import Bank from './Bank';
import Ajax from './Ajax';
import Register from './Register';
import Login from './Login';
import Default from './Default';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrafficPolice from './TrafficPolice';
import Student from './Student';
import Home from './Home';
//create the store

//let myStore=createStore(myReducer)

ReactDOM.render(
  <Home/>
  ,
  document.getElementById('root')
  //let div= document.getElementById('root')
  // div.appendChild("")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
{/* <React.StrictMode>
    {/* <App lib="react JS" lang="JS"/> */}
   {/* <Pizza topping="Panner"></Pizza> */}
  {/* <Register/> */}
  // <Provider store={store}>
  //   <ReduxComp ></ReduxComp>
  // </Provider>
//   import Ajax from './Ajax';
// import Register from './Register';
// import Component1 from './Component1';
// import ReduxComp from './ReduxComp';
// import {createStore } from 'redux';
// import reducer from './reducer';
// import {Provider} from 'react-redux'
// let store=createStore(reducer)

  // </React.StrictMode>, */}
reportWebVitals();
