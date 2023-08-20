import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import ProductList from './pages/productlist'; 
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import theme from "./theme";
import Dashboard from "./components/admin/Dashboard";
import BoM from "./pages/DistributionRequest";
import AddItem from './pages/additem';
import ModifyItem from './pages/modifyitem';
import PrivacyPolicy from './components/admin/PrivacyPolicy';
import TermsOfService from './components/admin/TermsOfService'; 
import DistributionReport from "./pages/DistributionReportPage";


const httpLink = createHttpLink({
  uri: '/graphql',
});


// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import theme from "./theme";
// import Dashboard from "./components/admin/Dashboard";
// import BoM from "./pages/DistributionRequest";


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
              {/* {<Route path="/distribution" element={<DistributionManagement />} />} */}
              <Route path="/BoM" element={<BoM />} />
              <Route
                path="/distributionreport"
                element={<DistributionReport />}
              />


              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/additem" element={<AddItem />} />
              <Route path="/modifyitem/:productId" element={<ModifyItem />} />

              <Route path="/privacy" element={<PrivacyPolicy />}/>
              <Route path="/terms" element={<TermsOfService />}/>



              <Route path="*" element={<h1>Not found</h1>}></Route>
            </Routes>
          </div>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default App;
