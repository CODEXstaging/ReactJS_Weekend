import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pizza from './Pizza';
import Human from './Human';
import Food from './Food';
import IPL from './IPL';


ReactDOM.render(
  <IPL/>,
  // <Food/>, //root component
  // <Human heart="1" />,
  //  <Pizza topping="chicken" cheese="double"  /> ,//passing the data as attribute
  document.getElementById('root')
);
//2 args ( component, element )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
