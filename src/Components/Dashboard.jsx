import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppBar from '../Components/AppBar';
import Slider from '../Components/Slider'
import Gallery from '../Components/Gallery'
import ContactForm from '../Components/ContactForm'
import Forum from '../Components/Forum'
import Footer from '../Components/Footer'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={12}>
          <AppBar />
        </Grid>
        <Grid size={12}>
          <Slider />
        </Grid>
        <Grid size={12}>
          <Gallery />
        </Grid>
        <Grid size={12}>
          <ContactForm />
        </Grid>
        <Grid size={12}>
          <Forum />
        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
