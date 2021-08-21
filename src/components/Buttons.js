

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

  return (
    <div className={classes.root}>
    
        <Link to="/prev">
            <Button variant="contained" color="primary">
                Prev
            </Button>
        </Link>
        <Link to="/next">
            <Button variant="contained" color="secondary">
                Next
            </Button>
        </Link>

    </div>
  );
}
