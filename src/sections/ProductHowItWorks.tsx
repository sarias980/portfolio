import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ForumIcon from '@mui/icons-material/Forum';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  fontSize: 55,
  my: 4,
  color: 'white'
};

function ProductHowItWorks() {

  const renderBox = (icon: any, description: string, index:number) => (
      <Box sx={item}>
        <Box sx={number}>{index}.</Box>
        {icon}
        <Typography variant="h5" align="center" color='white'>{description}</Typography>
      </Box>
  )
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'info.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/assets/img/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" color='white' sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
                {renderBox(<ForumIcon sx={image}/>,
                    'Make a meeting to analyze your needs and offer you the best solution for your project in each platform.',
                    1)}
            </Grid>
            <Grid item xs={12} md={4}>
                {renderBox(<ReceiptLongIcon sx={image}/>,
                    'Define a budget and a timeline for the project, and start the design of the best user experience and interface for your web or application.',
                    2)}
            </Grid>
            <Grid item xs={12} md={4}>
                {renderBox(<QueuePlayNextIcon sx={image}/>,
                    'Develop your project with the best practices and tools to ensure the best performance and scalability.',
                    3)}
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="#contact"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
