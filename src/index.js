import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './BasicCard';
import reportWebVitals from './reportWebVitals';
import Grid from '@mui/material/Grid';
import { Domain } from '@mui/icons-material';


ReactDOM.render(
  
  <React.StrictMode>
    <div className='background'>
    <Grid container direction="row" justifyContent="space-evenly" >
      <Grid item ><Card type="Free"
      cost="0"
      user="Single"
      storage="5"
      private="disabled"
      phone="disabled"
      domain="disabled"
      reports="disabled"
      
      tprivate="text.disabled"
      tphone="text.disabled"
      tdomain="text.disabled"
      treports="text.disabled"/></Grid>
      
      <Grid item ><Card type="Plus" 
      cost="9"
      user="5"
      storage="50"
      private=""
      phone=""
      domain=""
      reports="disabled"
      
      
      tprivate=""
      tphone=""
      tdomain=""
      treports="text.disabled"/></Grid>

      <Grid item ><Card type="Pro"
      cost="49"
      user="Unlimited"
      storage="150"
      private=""
      phone=""
      domain=""
      reports=""
      
      tprivate=""
      tphone=""
      tdomain=""
      treports=""/></Grid>

    </Grid>
    </div> 
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
