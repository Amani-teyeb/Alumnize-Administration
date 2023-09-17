import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const PayPicModal = ({ children, user }) => {
  const [opend, setOpend] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);

  const handleOpenDialog = () => {
    setOpend(true);
  };
  const handleCloseDialog = () => {
    setOpend(false);
  };
  return (
    <div>
      <span role="button" tabIndex={0} onClick={handleOpenDialog} onKeyDown={handleOpenDialog}>
        {children}
      </span>
      <Dialog
        fullWidth={fullWidth}
        open={opend}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {user.firstName} {user.lastName}
        </DialogTitle>
        <DialogContent>
          <Typography>PayMethod : {user.payMethod}</Typography>
          <Typography>Subjects Number : {user.wichlist.length}</Typography>
          <Typography>Date : {user.dateUpdatePic}</Typography>
          <img src={user.payPicture} alt="img" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PayPicModal;
