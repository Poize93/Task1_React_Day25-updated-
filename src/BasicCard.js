import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { blue, blueGrey } from '@mui/material/colors';
import './index.css';


export default function BasicCard(props) {
  return (
    <div className='card'>
       
      <Card  sx={{ minWidth: 150 }}>
      
     
         <CardContent>
                <Grid container direction="column" >
                  <Grid item  >
                    <Grid container justifyContent="center">
                      <Typography variant="h5" gutterBottom  component="div"  color="text.secondary">
                      {props.type}
                      </Typography>
                    </Grid>
                  </Grid> 

                  <Grid item >
                    <Grid container direction="row" justifyContent="center" alignItems="baseline">
                     
                      <Typography sx={{ fontSize: 50 }} variant="h6" >
                      ${props.cost}
                      </Typography>
                      
                      <Typography sx={{ fontSize: 14 }} variant="h2"  >
                      /month    
                      </Typography>
                      
                    </Grid>
                  </Grid>
                  <Divider variant="middle" />

                  <Grid Item>
                    <Grid container direction="row">
                      <CheckIcon/>
                      <Typography variant="body2">
                        {props.user} Users
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>


                  <Grid Item>
                    <Grid container direction="row">
                      <CheckIcon />
                      <Typography variant="body2">
                        {props.storage}GB Storage
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container direction="row">
                      <CheckIcon/>
                      <Typography variant="body2">
                        Unlimited Public Projects
                        <br />
                      </Typography>
                    </Grid>
                  </Grid>

                
                  <Grid item>
                    <Grid container direction="row">
                          <CheckIcon />
                          <Typography variant="body2">
                            Community Access
                            <br />
                          </Typography>
                      </Grid>
                  </Grid>

                
                  <Grid item>
                      <Grid container direction="row">
                          <CloseIcon color={props.private}/>
                          <Typography variant="body2" color={props.tprivate} >
                            Unlimited Private Projects
                            <br />
                          </Typography>
                      </Grid>
                  </Grid>

                
                  <Grid item>
                    <Grid container direction="row">
                          <CloseIcon color={props.phone}/>
                            <Typography variant="body2" color={props.tphone} gutterBottom>
                            Dedicated Phone Support
                            <br />
                            </Typography>
                    </Grid>
                  </Grid>

                
                  <Grid item>
                    <Grid container direction="row">
                          <CloseIcon color={props.domain} />
                            <Typography variant="body2" color={props.tdomain} gutterBottom>
                            Free Subdomain
                            <br />
                            </Typography>
                    </Grid>
                  </Grid>

                
                  <Grid item>
                    <Grid container direction="row">
                      <CloseIcon color={props.reports} />
                        <Typography variant="body2" color={props.treports} gutterBottom>
                        Monthly Status Reportss
                        <br />
                        </Typography>
                    </Grid>
                  </Grid>



              </Grid>
         
         </CardContent>
         <CardActions>
        
            <Grid container  justify="center" justifyContent="center">
                <Grid>
                  
                    <Button variant="contained" >Button</Button>
                    
                  
                </Grid>
            </Grid>
            
          </CardActions>
      
        

      </Card>
      </div>
  
  
      
      
  );
}
