
import React,{useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink} from 'react-router-dom';
import { Context } from '../FormContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function Buttons() {
  const classes = useStyles();
  const {step,pageIndex,nextStep,prevStep} = useContext(Context)
  console.log(`ButtonCmp : ${pageIndex[step]}`)
  return (
    <div className={classes.root}>
            <Button component={RouterLink} to={{pathname : `/${pageIndex[step]}`}} variant="contained" color="primary" id="prev" name="prev"  onClick={prevStep} disabled={step===0 ? true : false}>
                Prev
            </Button>
            <Button component={RouterLink} to={{pathname : `/${pageIndex[step]}`}} variant="contained" color="secondary" id="next" name="next" onClick={nextStep}>
                Next
            </Button>
    </div>
  );
}
