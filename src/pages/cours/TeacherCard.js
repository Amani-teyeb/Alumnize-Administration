import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// utils
//

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 30,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

TeacherCard.propTypes = {
  theme: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function TeacherCard({ user }) {
  const { firstName, lastName, _id, level } = user;

  return (
    <Grid item md={3} mb={4} ml={6}>
      <Card sx={{ position: 'relative', width: '300px', spacing: '4' }}>
        <StyledCardMedia
          sx={{
            pt: 'calc(100% * 3 / 5)',
            '&:after': {
              top: 0,
              position: 'absolute',
              bgcolor: '#ECBDE7',
            },
          }}
        >
          <StyledCover alt={firstName} src="/assets/icons/teach.jpg" />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 1,
            bgcolor: '#FAEDF9',
          }}
        >
          <StyledTitle
            color="inherit"
            variant="subtitle2"
            underline="hover"
            href={`courses/${_id}`}
            sx={{
              typography: 'h6',
              height: 30,
              color: 'black',
            }}
          >
            Name : {firstName.concat(' ', lastName)}
          </StyledTitle>
          <h4>Specialization : {level}</h4>
        </CardContent>
      </Card>
    </Grid>
  );
}
