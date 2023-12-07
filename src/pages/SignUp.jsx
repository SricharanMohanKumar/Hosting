import React, { useState } from 'react';
import Header1 from '../CommonComponents/Header1';
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Login.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AddProfile } from '../Redux/Actions';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import backgroundImage from '../images/bg.jpeg';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function SignUp(props) {

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleOpen = () => {

    setOpen(true);

  };

  const handleClose = () => {

    setOpen(false);

  };

  const handleOpen1 = () => {

    setOpen1(true);

  };

  const handleClose1 = () => {

    setOpen1(false);
    dispatch(AddProfile(formData));
    navigate('/Login');

  };

  const [repasword, setRepasword] = useState('');

  function checkPassword(enteredPassword, storedPassword) {
    return enteredPassword === storedPassword;
  }

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FIRST_NAME: '',
    LAST_NAME: '',
    USER_NAME: '',
    EMAIL_ID: '',
    PASSWORD: '',
    AGE: '',
    PREFERENCES: '',
    LOCATION: '',
  });

  const handleInputChange1 = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

  };
  const handleInputChange2 = (e) => {
    const { value } = e.target;
    setRepasword(value);
  };

  const dispatch = useDispatch();


  // const eventData = useSelector((state) => state.eventReducer?.eventData);

  const HandleSubmit = (e) => {
    if (document.getElementById('PASSWORD').value !== document.getElementById('REPASSWORD').value) {
      handleOpen();
      e.preventDefault();
    }
    else {


      handleOpen1();


      e.preventDefault();

      // const updatetedData=[...eventData,formData];



      // Reset the form data after submission

    }
  };
  // const logo = `${process.env.PUBLIC_URL}/logo.png`;
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


      <div style={{ position: "relative", justifyContent: "center", justifyItems: "center" }} className="flex justify-center items-center h-screen">
        <div className="form-container">
          <Link to="/">
            <button className="close-button">X</button>
          </Link>
          <form onSubmit={HandleSubmit}>
            <h2 className='signup-text'>SIGN UP</h2>

            <div className="input-group justify-center" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '5px', alignItems: 'center' }}>
              <label htmlFor="userId">First Name<span style={{ color: "red" }}>*</span></label>
              <input type="text" id="FIRST_NAME" value={formData.FIRST_NAME} onChange={handleInputChange1} required />

              <label htmlFor="userId">Last Name<span style={{ color: "red" }}>*</span></label>
              <input type="text" id="LAST_NAME" value={formData.LAST_NAME} onChange={handleInputChange1} required />

              <label htmlFor="userId">User Name<span style={{ color: "red" }}>*</span></label>
              <input type="text" id="USER_NAME" value={formData.USER_NAME} onChange={handleInputChange1} required />

              <label htmlFor="userId">Email Id<span style={{ color: "red" }}>*</span></label>
              <input type="text" id="EMAIL_ID" value={formData.EMAIL_ID} onChange={handleInputChange1} required />

              <label htmlFor="userId">Password<span style={{ color: "red" }}>*</span></label>
              <input type="password" id="PASSWORD" value={formData.PASSWORD} onChange={handleInputChange1} required />

              <label htmlFor="userId">Confirm Password<span style={{ color: "red" }}>*</span></label>
              <input type="password" id="REPASSWORD" value={repasword} onChange={handleInputChange2} required />


            </div>
            <div className="form-footer">
              <div className='flex justify-center items-center'>
                <Button className='flex justify-center items-center' type="submit" style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }} variant="contained"> SIGN UP </Button>
              </div>
              <Link to="/Login" className="signup-link">Have an account? Log In</Link>
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
            Passwords do not match. Renter the password appropriately.
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
      <BootstrapDialog
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open1}
        PaperProps={{
          sx: {
            backgroundColor: '#D5F0F8',
            padding: '60px', // Set background color
          },
        }}
      >

        <button className="close-button" onClick={handleClose1}> X</button>
        <DialogContent>


          <Typography gutterBottom>
            Profile created successfully.
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
            variant="contained" onClick={() => { handleClose1(); }}> Okay </Button>



          {/* <Button autoFocus onClick={handleClose}>
            Confirm
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
    </div>

  );
}


