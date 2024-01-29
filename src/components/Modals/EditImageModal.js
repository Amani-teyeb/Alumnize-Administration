import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import FileUpload from 'react-mui-fileuploader';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box, FormControl, Stack, InputLabel, Select, MenuItem, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Iconify from '../iconify';
import { EditImage } from '../../Redux/actions';

const EditImageModal = ({ children, element }) => {
  const dispatch = useDispatch();

  const [opende, setOpende] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [fileToUpload, setFileToUpload] = useState();

  const handleOpenDialogE = () => {
    setOpende(true);
  };
  const handleCloseDialogE = () => {
    setOpende(false);
  };

  const handleFilesChange = (file) => {
    // Update chosen files
    setFileToUpload(file[0]);
    console.log(file[0]);
  };
  const handleSubmitDialogE = () => {
    const _id = element._id;
    const form = new FormData();
    form.append('_id', _id);
    form.append('image', fileToUpload);

    dispatch(EditImage(form));
    setOpende(false);
  };
  return (
    <>
      <span role="button" tabIndex={0} onClick={handleOpenDialogE} onKeyDown={handleOpenDialogE}>
        {children}
      </span>
      <Dialog
        fullWidth={fullWidth}
        open={opende}
        onClose={handleCloseDialogE}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Edit image'}</DialogTitle>
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
            <FileUpload onFilesChange={handleFilesChange} onContextReady={(context) => {}} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogE}>Cancel</Button>
          <Button autoFocus onClick={handleSubmitDialogE}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default EditImageModal;
