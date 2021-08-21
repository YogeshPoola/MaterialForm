import React,{useContext} from "react"
import { Context } from "../FormContext"
import { FormGroup } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

export default function FormUserDetails(){
    const classes = useStyles();
    const {firstName,lastName,email,handleChange}=useContext(Context)
    return(
        <div className={classes.root}>
            <FormGroup>
                <TextField id="standard-basic" label="FirstName" onChange={handleChange} value={firstName} name="firstName"/>
                <TextField id="standard-basic" label="LastName" onChange={handleChange} value={lastName} name="lastName" />
                <TextField id="standard-basic" label="email" onChange={handleChange} value={email} name="email" />
            </FormGroup>
        </div>
    )
} 