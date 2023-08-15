import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import theme from './theme';
import Dashboard from './components/admin/Dashboard';
import productlist from './pages/productlist';

function App() {
  return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode="light" />
            <CSSReset />
            <Dashboard />
            <productlist />
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
          {/* <Route 
            path="/matchup/:id" 
            element={<Vote />} 
          /> */}
        </Routes>
      </div>
    </Router>
    </ChakraProvider>
  );
}

export default App;
