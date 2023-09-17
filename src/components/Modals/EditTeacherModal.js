import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Box, FormControl, Stack, InputLabel, Select, MenuItem, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Iconify from '../iconify';
import { registerUser, updateUser } from '../../Redux/actions';

const EditTeacherModal = ({ children, user }) => {
  const dispatch = useDispatch();

  const [opend, setOpend] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [level, setLevel] = useState('');
  const [group, setGroup] = useState('');
  const [moy, setMoy] = useState('');
  const [advance, setAdvance] = useState('');

  const handleOpenDialog = () => {
    setOpend(true);
  };
  const handleCloseDialog = () => {
    setOpend(false);
  };

  const handleSubmitDialog = () => {
    const id = user._id;
    const theuser = {
      _id: id,
      level: level || user.level,
      moy: moy || user.moy,
      advance: advance || user.advance,
      group: group || user.group,
    };
    dispatch(updateUser(theuser));
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
        <DialogTitle id="alert-dialog-title">{'Edit User'}</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
            }}
          >
            <Stack spacing={3}>
              <TextField
                id="filled-basic"
                label="Salary (TND)"
                variant="filled"
                type="number"
                placeholder="Salary"
                sx={{ marginBottom: '10px' }}
                value={moy}
                onChange={(e) => setMoy(e.target.value)}
              />

              <TextField
                id="filled-basic"
                label="Credit (TND)"
                variant="filled"
                type="number"
                placeholder="Credit"
                sx={{ marginBottom: '10px' }}
                value={advance}
                onChange={(e) => setAdvance(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="speciality"
                variant="filled"
                type="text"
                placeholder="speciality"
                sx={{ marginBottom: '10px' }}
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="group"
                variant="filled"
                type="text"
                placeholder="group"
                sx={{ marginBottom: '10px' }}
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmitDialog} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTeacherModal;
