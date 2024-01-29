import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useDispatch, useSelector } from 'react-redux';
// @mui
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FileUpload from 'react-mui-fileuploader';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {
  Grid,
  Container,
  Typography,
  Card,
  Stack,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { addImage, getImages, EditImage } from '../Redux/actions';
// components
import MyCalendar from '../sections/@dashboard/app/MyCalendar';
import Iconify from '../components/iconify';
// sections
import { AppTasks } from '../sections/@dashboard/app';
import EditImageModal from '../components/Modals/EditImageModal';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.user.images);
  const imagesEmp = images.filter((e) => e.nature === 'emploi');
  const imagesPrix = images.filter((e) => e.nature === 'prix');
  console.log(images);
  const theme = useTheme();
  const [opend, setOpend] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [fileToUpload, setFileToUpload] = useState();
  const [nature, setNature] = useState('');
  const [date, setDate] = useState(new Date());
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  const onChange = (date) => {
    setDate(date);
  };

  const handleOpenDialog = () => {
    setOpend(true);
  };

  const handleCloseDialog = () => {
    setOpend(false);
  };

  const handleFilesChange = (file) => {
    // Update chosen files
    setFileToUpload(file[0]);
    console.log(file[0]);
  };

  const handleNature = (event) => {
    const {
      target: { value },
    } = event;
    setNature(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleSubmitDialog = () => {
    const form = new FormData();
    form.append('nature', nature);
    form.append('image', fileToUpload);

    dispatch(addImage(form));
    setOpend(false);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            H-tag academy
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenDialog}>
            New data{' '}
          </Button>{' '}
        </Stack>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={6} md={3} mb={5}>
            <Card
              sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',
                backgroundImage: 'url(/assets/images/covers/cover_21.jpg)',
              }}
            >
              <img src="/assets/images/covers/cover_21.jpg" alt="login" />

              <Typography variant="subtitle3" sx={{ opacity: 0.72 }}>
                Step by Step
              </Typography>
            </Card>
            {/* <img src="/assets/images/covers/cover_9.jpg" alt="login" /> */}
          </Grid>

          <Grid item xs={12} sm={6} md={3} mb={5}>
            <Card
              sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',
                backgroundImage: 'url(/assets/images/covers/cover_23.jpg)',
              }}
            >
              <img src="/assets/images/covers/cover_23.jpg" alt="login" />

              <Typography variant="subtitle3" sx={{ opacity: 0.72 }}>
                Enjoy your time
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} mb={5}>
            <Card
              sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',
                backgroundImage: 'url(/assets/images/covers/cover_17.jpg)',
              }}
            >
              <img src="/assets/images/covers/cover_17.jpg" alt="login" />

              <Typography variant="subtitle3" sx={{ opacity: 0.72 }}>
                Take the Right Way
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} mb={5}>
            <Card
              sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',
                backgroundImage: 'url(/assets/images/covers/cover_3.jpg)',
              }}
            >
              <img src="/assets/images/covers/cover_3.jpg" alt="login" />

              <Typography variant="subtitle3" sx={{ opacity: 0.72 }}>
                Succeed
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {imagesEmp &&
          imagesEmp.map((e) => {
            const { _id, image } = e;
            return (
              <Grid item xs={12} sm={6} md={3} mb={5}>
                <img src={image} alt="login" />
                <EditImageModal element={e}>
                  <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                    Edit{' '}
                  </Button>{' '}
                </EditImageModal>
              </Grid>
            );
          })}

        {imagesPrix &&
          imagesPrix.map((e) => {
            const { _id, image } = e;
            return (
              <Grid item xs={12} sm={6} md={3} mb={5}>
                <img src={image} alt="login" />
                <EditImageModal element={e}>
                  <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                    Edit{' '}
                  </Button>{' '}
                </EditImageModal>
              </Grid>
            );
          })}
      </Container>
      <Dialog
        fullWidth={fullWidth}
        open={opend}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Add image'}</DialogTitle>
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
              <InputLabel htmlFor="max-width">nature</InputLabel>
              <Select
                autoFocus
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                  defaultValue: 'emploi',
                }}
                value={nature}
                onChange={handleNature}
              >
                <MenuItem value="emploi"> emploi</MenuItem>
                <MenuItem value="prix"> prix </MenuItem>
              </Select>
            </FormControl>
            <FileUpload onFilesChange={handleFilesChange} onContextReady={(context) => {}} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button autoFocus onClick={handleSubmitDialog}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
