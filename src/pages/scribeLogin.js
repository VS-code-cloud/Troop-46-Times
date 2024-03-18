import React, { useRef, useState } from 'react';
import '../assets/css/global.scss';

// import components
import Header from "../components/header";
import ArticleListing from '../components/articleListing';
import Footer from "../components/footer";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 function ScribeLogin() {
  const scribeLogin = {email: 'kaeson.mayer@gmail.com', password: 'Troop46SecureLogin123212464236963'}
  let remember
  const handleChange = (e) => {
    remember = e.target.checked;
    // do whatever you want with isChecked value
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    let email = data.get('email')
    let password = data.get('password')
    if (email!==scribeLogin.email || password!==scribeLogin.password) {
      toast.error('Invalid login credentials')
      return
    }
    if (remember) {
      window.localStorage.setItem('verified', true)
    } else {
      window.sessionStorage.setItem('verified', true)
    }

    toast.success("Successfull login");
    window.location.href="/"
  };
  return (
    <div>
    <div className='bodyWrapTotal'>
        <Header/>
        <hr/><hr/>   
        <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://wallpapercave.com/wp/wp2226729.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  onChange={e => handleChange(e)}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container> 
    <ToastContainer />

    </div>
    <Footer/>
    </div>
  );
}

export default ScribeLogin;
