import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from '@vuer-ai/react-helmet-async';
import Router from './components/router/Router';
import ScrollToTopButton from './components/shared/ScrollToTopButton';
import { initGA, trackPageLoadTime, trackScrollDepth } from './services/analytics';

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, Arial'
    }
});

function App() {
    useEffect(() => {
        // Initialize Google Analytics
        initGA();

        // Track page load time
        trackPageLoadTime();

        // Track scroll depth
        trackScrollDepth();
    }, []);

    return (
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Router />
                    <ScrollToTopButton />
                </BrowserRouter>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
