import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import TeacherCard from './TeacherCard';
import { getTeachers } from '../../Redux/actions';

export default function TeacherCourse() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);
  return (
    <>
      <Container>
        <Grid container spacing={10}>
          {users.map((user, index) => (
            <TeacherCard key={user._id} user={user} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
