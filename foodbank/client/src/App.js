import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import theme from './theme';
import Dashboard from './components/admin/Dashboard';
import ProductList from './pages/productlist'; 

import BoM from "./pages/DistributionRequest";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light" />
        <CSSReset />
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/productlist" element={<ProductList />} />
              {<Route path="/dashboard" element={<Dashboard />} />}
              {/* {<Route path="/distribution" element={<DistributionManagement />} />} */}
              <Route path="/BoM" element={<BoM />} />

              <Route path="*" element={<h1>Not found</h1>}></Route>
            </Routes>
          </div>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default App;
