import * as React from 'react';
import {Theme} from '@mui/material/styles';
import {SxProps} from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import Typography from '../components/Typography';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

function ProductValues() {

    const renderBox = (icon: any, alt: string, title: string, description: string) => {
        return (
            <Box sx={item}>
                {icon}
                <Typography variant="h6"
                            color='white'
                            sx={{my: 5}}>
                    {title}
                </Typography>
                <Typography variant="h5"
                            color='white'>
                    {description}
                </Typography>
            </Box>
        );
    }
    return (
        <Box
            component="section"
            sx={{display: 'flex', overflow: 'hidden', bgcolor: 'info.dark'}}
        >
            <Container sx={{mt: 15, mb: 30, display: 'flex', position: 'relative'}}>
                <Box
                    component="img"
                    src="/assets/img/productCurvyLines.png"
                    alt="curvy lines"
                    sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
                />
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        {renderBox(
                            <TroubleshootIcon sx={{ fontSize: 55, color:'white'}}/>,
                            'suitcase',
                            'Analysis',
                            'Analyze your needs to offer you the best solution for your project in each platform.'
                        )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {renderBox(
                            <BrushIcon sx={{ fontSize: 55, color:'white'}}/>,
                            'clock',
                            'Design',
                            'Design the best user experience and interface for your web or application.'
                        )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {renderBox(
                            <CodeIcon sx={{ fontSize: 55, color:'white'}}/>,
                            'chart',
                            'Development',
                            'Develop your project with the best practices and the latest technologies.'
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductValues;
