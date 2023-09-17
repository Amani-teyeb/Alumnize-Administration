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

const EditUserModal = ({ children, user }) => {
  const dispatch = useDispatch();

  const [opend, setOpend] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [level, setLevel] = useState('');
  const [verified, setVerified] = useState('');
  const [group, setGroup] = useState('');

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
  const handleGroup = (event) => {
    const {
      target: { value },
    } = event;
    setGroup(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value : value._id
    );
    console.log(event.target.value);
  };
  const handleVerified = (event) => {
    const {
      target: { value },
    } = event;
    setVerified(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value : value._id
    );
    console.log(event.target.value);
  };

  const handleSubmitDialog = () => {
    const id = user._id;
    const theuser = {
      _id: id,
      verified: verified || user.verified,
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
            <FormControl sx={{ mt: 2, maxWidth: 'xl' }}>
              <InputLabel htmlFor="max-width">Group ...</InputLabel>
              <Select
                autoFocus
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                  defaultValue: 'group_1',
                }}
                value={group}
                onChange={handleGroup}
              >
                <MenuItem value="group_1"> group_1 </MenuItem>
                <MenuItem value="group_2"> group_2 </MenuItem>
                <MenuItem value="group_3"> group_3 </MenuItem>
                <MenuItem value="group_4"> group_4 </MenuItem>
                <MenuItem value="group_5"> group_5 </MenuItem>
                <MenuItem value="group_6"> group_6 </MenuItem>
                <MenuItem value="group_7"> group_7 </MenuItem>
                <MenuItem value="group_8"> group_8 </MenuItem>
                <MenuItem value="group_9"> group_9 </MenuItem>
                <MenuItem value="group_10"> group_10 </MenuItem>
                <MenuItem value="group_pilote_1"> group_pilote_1 </MenuItem>
                <MenuItem value="group_pilote_2"> group_pilote_2 </MenuItem>
                <MenuItem value="group_pilote_3"> group_pilote_3 </MenuItem>
                <MenuItem value="group_pilote_4"> group_pilote_4 </MenuItem>
                <MenuItem value="group_pilote_5"> group_pilote_5 </MenuItem>
                <MenuItem value="group_pilote_6"> group_pilote_6 </MenuItem>
                <MenuItem value="group_pilote_7"> group_pilote_7 </MenuItem>
                <MenuItem value="group_pilote_8"> group_pilote_8 </MenuItem>
                <MenuItem value="group_pilote_9"> group_pilote_9 </MenuItem>
                <MenuItem value="group_pilote_10"> group_pilote_10 </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 2, maxWidth: 'xl' }}>
              <InputLabel htmlFor="max-width">Is Verified ?</InputLabel>
              <Select
                autoFocus
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                  defaultValue: 'false',
                }}
                value={verified}
                onChange={handleVerified}
              >
                <MenuItem value="true"> true </MenuItem>
                <MenuItem value="false"> false </MenuItem>
              </Select>
            </FormControl>
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
                <MenuItem value={'2 ème année'}>2 ème année</MenuItem>
                <MenuItem value={'3 ème année'}>3 ème année</MenuItem>
                <MenuItem value={'4 ème année'}>4 ème année</MenuItem>
                <MenuItem value={'5 ème année'}>5 ème année</MenuItem>
                <MenuItem value={'6 ème année'}>6 ème année</MenuItem>
                <MenuItem value={'7 ème année'}>7 ème année</MenuItem>
                <MenuItem value={'8 ème année'}>8 ème année</MenuItem>
                <MenuItem value={'9 ème année'}>9 ème année</MenuItem>
                <MenuItem value={'1 ère secondaire'}> 1 ère secondaire</MenuItem>
                <MenuItem value={'2 ème secondaire informatique'}>2 ème secondaire informatique</MenuItem>
                <MenuItem value={'2 ème secondaire scientifique'}>2 ème secondaire scientifique</MenuItem>
                <MenuItem value={'2 ème secondaire économie'}>2 ème secondaire économie</MenuItem>
                <MenuItem value={'2 ème secondaire lettres'}>2 ème secondaire lettres</MenuItem>
                <MenuItem value={'3 ème secondaire économie'}>3 ème secondaire économie</MenuItem>
                <MenuItem value={'3 ème secondaire informatique'}>3 ème secondaire informatique</MenuItem>
                <MenuItem value={'3 ème secondaire math'}>3 ème secondaire math</MenuItem>
                <MenuItem value={'3 ème secondaire sciences exp'}>3 ème secondaire sciences exp</MenuItem>
                <MenuItem value={'3 ème secondaire techniques'}>3 ème secondaire techniques</MenuItem>
                <MenuItem value={'3 ème secondaire lettres'}>3 ème secondaire lettres</MenuItem>
                <MenuItem value={'Bac économie'}>Bac économie</MenuItem>
                <MenuItem value={'Bac sciences exp'}>Bac sciences exp</MenuItem>
                <MenuItem value={'Bac informatique'}>Bac informatique</MenuItem>
                <MenuItem value={'Bac lettres'}>Bac lettres</MenuItem>
                <MenuItem value={'Bac mathématiques'}>Bac mathématiques</MenuItem>
                <MenuItem value={'Bac techniques'}>Bac techniques</MenuItem>
                <MenuItem value={'Formation Langues'}>Formation Langues</MenuItem>
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

export default EditUserModal;
