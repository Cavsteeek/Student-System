import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

export default function Student() {
    const paperStyle = {padding: '50px 20px', width:  600, margin: "20px auto"}
  const classes = useStyles();

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}> 
            <h1 style={{color:"#007BFF"}}><u>New Student</u></h1>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth/>
    </form>
    </Paper>
    </Container>  
  );
}
