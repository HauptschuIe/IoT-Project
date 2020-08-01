import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: "20px",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SuccessMessage() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Alert severity="success">Diese Pflanze muss noch nicht gegossen werden :)</Alert>
    </div>
  );
}
