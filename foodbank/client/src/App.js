import React from 'react';
import { ChakraProvider, CSSReset, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import Dashboard from './components/admin/Dashboard';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode="light" />
            <CSSReset />
            <Dashboard />
        </ChakraProvider>
    );
}

export default App;
