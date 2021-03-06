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

export default function FormPersonalDetails(){
    const classes = useStyles();
    const {occupation,city,bio,handleChange}=useContext(Context)
    return(
        <div className={classes.root}>
            <FormGroup>
                <TextField id="standard-basic" label="occupation" onChange={handleChange} value={occupation} name="occupation"/>
                <TextField id="standard-basic" label="city" onChange={handleChange} value={city} name="city" />
                <TextField id="standard-basic" label="bio" onChange={handleChange} value={bio} name="bio" />
            </FormGroup>
        </div>
    )
} 