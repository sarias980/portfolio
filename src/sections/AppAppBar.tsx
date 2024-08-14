import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import WhiteLogo from '../assets/logo/sarias-logo-ligth.svg';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function AppAppBar() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{justifyContent: 'center'}}>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/"
                        sx={{fontSize: 24}}
                    >
                        {/*Add logo*/}
                        <img src={WhiteLogo} alt="Sarias Logo" style={{width: '100px'}}/>
                    </Link>
                    {/*
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
          */}
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}

export default AppAppBar;
