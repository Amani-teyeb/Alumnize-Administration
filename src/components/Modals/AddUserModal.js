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

const AddUserModal = ({ children }) => {
  const dispatch = useDispatch();
  const [opend, setOpend] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState('');
  const [amount, setAmount] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const LevelTab = [
    'première année',
    'deuxième année',
    'troisième année',
    'Quatrième année',
    'Cinquième année',
    'sixième année',
  ];
  const handleOpenDialog = () => {
    setOpend(true);
  };
  const handleCloseDialog = () => {
    setOpend(false);
  };

  const handleLevel = (event) => {
    const {
      target: { value },
    } = event;
    setLevel(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value : value._id
    );
    console.log(event.target.value);
  };

  const handleSubmitDialog = () => {
    const user = {
      firstName,
      lastName,
      role: 'student',
      level,
      email,
      password,
      amount,
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
            <TextField
              id="filled-basic"
              label="Amount (TND)"
              variant="filled"
              type="number"
              placeholder="Amount"
              sx={{ marginBottom: '10px' }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
            <FormControl sx={{ mt: 2, maxWidth: 'xl' }}>
              <InputLabel htmlFor="max-width">Level</InputLabel>
              <Select
                autoFocus
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                  defaultValue: 'level',
                }}
                value={level}
                onChange={handleLevel}
              >
                {LevelTab.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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

export default AddUserModal;
