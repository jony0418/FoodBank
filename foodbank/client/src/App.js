import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import theme from './theme';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="light" />
    <CSSReset />
      <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Login/>} 
          />
          <Route 
            path="/register" 
            element={<Register/>} 
          />
          { <Route 
            path="/dashboard" 
            element={
            <Dashboard/>} 
          />}
        </Routes>
      </div>
    </Router>
  </ChakraProvider>
  );
}

export default App;
