import React, { useState } from 'react';
import Header1 from '../CommonComponents/Header1';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddViewProfile } from '../Redux/Actions';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography';
import backgroundImage from '../images/bg.jpeg';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
// Import the profile data

const Login = ({ events }) => {

  const [open, setOpen] = React.useState(false);


  const handleOpen = (e) => {

    setOpen(true);

  };

  const handleClose = () => {

    setOpen(false);

  };


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Logic to check entered credentials
    const user = events.find(
      (profile) => profile.USER_NAME === userId && profile.PASSWORD === password
    );

    if (user) {
      // Login successful, redirect or handle the logged-in user
      navigate('/Home/null');
      dispatch(AddViewProfile(user));
      // Redirect to home or any other page
    } else {
      handleOpen();


    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensure the background covers the entire viewport
        // Other styles for your content
      }}
    >
      <Header1 />

      <div className="flex justify-center items-center h-screen">
        <div className="form-container">
          <Link to="/">
            <button className="close-button">X</button>
          </Link>
          <form onSubmit={handleLogin}>
            <h2 className="signup-text">LOGIN</h2>

            <div
              className="input-group justify-center"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <label htmlFor="userId">
                User Id <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />

              <label htmlFor="password">
                Password<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="form-footer">
              <a href="#">Forgot Password?</a>
              <div className="flex justify-center items-center">
                <Button
                  className="flex justify-center items-center"
                  type="submit"
                  style={{
                    color: 'black',
                    backgroundColor: '#D3D3D3',
                    fontSize: '15px',
                    fontWeight: 'Bold',
                    marginRight: '10px',
                    marginTop: '2px',
                    width: '100px',
                  }}
                  variant="contained"
                >
                  LOGIN
                </Button>
              </div>
              <Link to="/SignUp" className="signup-link">
                New User? SIGN UP
              </Link>
            </div>
          </form>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: '#D5F0F8',
            padding: '60px', // Set background color
          },
        }}
      >

        <button className="close-button" onClick={handleClose}> X</button>
        <DialogContent>


          <Typography gutterBottom>
            Invalid Credentials.. Please try again later..
          </Typography>
        </DialogContent>
        <DialogActions
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '16px', // Add padding if needed
          }}
        >

          <Button autofocus className='flex justify-center items-center'
            type="button"
            style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }}
            variant="contained" onClick={() => { handleClose(); }}> Okay </Button>



          {/* <Button autoFocus onClick={handleClose}>
            Confirm
          </Button> */}
        </DialogActions>
      </BootstrapDialog>

    </div>
  );
}

const mapStateToProps = (state) => ({
  events: state.Profile,
});

export default connect(mapStateToProps)(Login);