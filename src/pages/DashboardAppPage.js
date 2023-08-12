import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// components
import MyCalendar from '../sections/@dashboard/app/MyCalendar';
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppWidgetSummary
} from '../sections/@dashboard/app';



// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const [date, setDate] = useState(new Date())
  const user = useSelector(state => state.auth.user)

  const onChange = date =>{
    setDate(date);
  }
  return (
    <>
    
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={6} md={3} mb={5}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} mb={5}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} mb={5}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} mb={5}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
         
          
            

          <Grid item xs={12} md={6} lg={8} mr={11}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
          <MyCalendar />
          
        </Grid>
      </Container>
    </>
  );
}
