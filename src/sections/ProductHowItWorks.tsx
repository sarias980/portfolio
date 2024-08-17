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
  color: 'secondary.dark',
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
        <Box sx={number}>{index}</Box>
        {icon}
        <Typography variant="h5"
                    align="center"
                    color='white'
                    my={1}
                    mx={'auto'}
        maxWidth={675}
        >
        {description}</Typography>
      </Box>
  )
  return (
    <Box
      component="section"
      sx={{display: 'flex', bgcolor: 'info.dark', overflow: 'hidden'}}
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
          <Typography variant="h4" marked="center" component="h2" color='white' sx={{mb: 10}}>
          How it works
          </Typography>

          <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
                {renderBox(<ForumIcon sx={image}/>,
                    `We will arrange a meeting to fully understand and analyze the core needs and goals of your project. Every design and development decision will be aligned with your brand's objectives and user needs`,
                    1)}
            </Grid>
            <Grid item xs={12} md={12}>
                {renderBox(<ReceiptLongIcon sx={image}/>,
                    `We will define a budget and a timeline for the project, and we will start transforming insights into a visually and intuitive user experience, ensuring it not only looks great but also functions seamlessly.`,
                    2)}
            </Grid>
            <Grid item xs={12} md={12}>
                {renderBox(<QueuePlayNextIcon sx={image}/>,
                    `Bringing designs to life with clean, efficient and scalable code is where the magic happens. We will turn static designs into a dynamic, interactive and user-friendly website, ensuring a flawless experience across all devices.`,
                    3)}
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="https://www.linkedin.com/in/sergi-arias-fern%C3%A1ndez-ab2729148/"
          sx={{mt: 8, color: 'white'}}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
