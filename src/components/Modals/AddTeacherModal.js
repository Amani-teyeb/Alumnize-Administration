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
import { Box, FormControl, Stack, InputLabel, Select, MenuItem, InputAdornment } from '@mui/material';
import { useDispatch } from 'react-redux';
import Iconify from '../iconify';
import { registerUser } from '../../Redux/actions';

const AddTeacherModal = ({ children }) => {
  const dispatch = useDispatch();
  const [opend, setOpend] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState('');
  const [moy, setMoy] = useState('');
  const [advance, setAdvance] = useState('');
  const [group, setGroup] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleOpenDialog = () => {
    setOpend(true);
  };
  const handleCloseDialog = () => {
    setOpend(false);
  };

  const handleSubmitDialog = () => {
    const user = {
      firstName,
      lastName,
      level,
      email,
      password,
      contactNumber,
      moy,
      advance,
      group,
      role: 'teacher',
    };
    dispatch(registerUser(user));
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
        <DialogTitle id="alert-dialog-title">{'Add a new student/teacher'}</DialogTitle>
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
            <TextField
              id="filled-basic"
              label="FirstName"
              variant="filled"
              placeholder="FirstName"
              sx={{ marginBottom: '10px' }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="LastName"
              variant="filled"
              placeholder="LastName"
              sx={{ marginBottom: '10px' }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Stack spacing={3}>
              <TextField name="email" label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
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
              label="Contact Number"
              variant="filled"
              type="number"
              placeholder="Contact Number"
              sx={{ marginBottom: '10px' }}
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />

            <TextField
              id="filled-basic"
              label="specialization"
              variant="filled"
              type="text"
              placeholder="specialization"
              sx={{ marginBottom: '10px' }}
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="group"
              variant="filled"
              type="text"
              placeholder="specialization"
              sx={{ marginBottom: '10px' }}
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />
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

export default AddTeacherModal;
