import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';
import productlist from './pages/productlist';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ChakraProvider>
    <TheRestOfYourApplication />
    <ApolloProvider client={client}> 
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/matchup" 
              element={<Matchup />} 
            />
            <Route 
              path="/matchup/:id" 
              element={<Vote />} 
            />
            <Route 
              path="/productlist" 
              element={<productlist />} 
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;

