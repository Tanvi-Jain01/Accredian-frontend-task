import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './Login';
import Register from './Register';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
      <Router>
	  <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
		<Footer />
      </Router>
    // </ThemeProvider>
  );
};

export default App;

