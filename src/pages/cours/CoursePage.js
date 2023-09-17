import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { getAllCourses, getCourseBySlug } from '../../Redux/actions';
import VideoCard from './VideoCard';

export const CoursePage = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const courses = useSelector((state) => state.course.courses);
  const teacherCourses = courses.filter((e) => e.createdBy === id);
  console.log(id);

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Courses
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {teacherCourses.map((course, index) => (
            <VideoCard key={course._id} course={course} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
};
