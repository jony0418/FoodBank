import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';

function App() {
  return (
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
