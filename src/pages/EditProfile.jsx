import React, { useState } from 'react';
import Header2 from '../CommonComponents/Header2';
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Login.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { EditProfileData } from '../Redux/Actions';
import { connect } from 'react-redux';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import backgroundImage from '../images/bg.jpeg';

import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const EditProfile = ({ events }) => {

  const [open, setOpen] = React.useState(false);


  const handleOpen = (e) => {

    setOpen(true);
    e.preventDefault();
  };

  const handleClose = () => {

    setOpen(false);
    HandleSubmit();
  };

  const userData = events[0];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FIRST_NAME: userData.FIRST_NAME,
    LAST_NAME: userData.LAST_NAME,
    USER_NAME: userData.USER_NAME,
    EMAIL_ID: userData.EMAIL_ID,
    PASSWORD: userData.PASSWORD,
    AGE: userData.AGE,
    PREFERENCES: userData.PREFERENCES,
    LOCATION: userData.LOCATION,
  });
  const dispatch = useDispatch();

  const handleInputChange1 = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const HandleSubmit = () => {



    // const updatetedData=[...eventData,formData];

    dispatch(EditProfileData(formData));

    navigate('/ViewProfile');
    // Reset the form data after submission

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
      <Header2 />


      <div style={{ position: 'relative' }} className="flex justify-center items-center h-screen">
        <div className="form-container ">
          <Link to="/Home/null">
            <button className="close-button">X</button>
          </Link>
          <form onSubmit={handleOpen}>
            <h2 className='signup-text' style={{ fontFamily: '"Inter-Bold", Helvetica, sans-serif', fontWeight: '700', color: '#125da8', fontSize: '36px', textAlign: 'center', }}>EDIT PROFILE</h2>

            <div className="input-group " style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: '5px', justifyItems: 'center' }}>
              <label htmlFor="userId">First Name<span style={{ color: "red" }}>*</span></label>
              <input type="text" id="FIRST_NAME" value={formData.FIRST_NAME} onChange={handleInputChange1} required />

              <label htmlFor="userId">Last Name<span style={{ color: "red" }}>*</span></label>
              <input type="text" id="LAST_NAME" value={formData.LAST_NAME} onChange={handleInputChange1} required />

              <label htmlFor="userId">Email Id<span style={{ color: "red" }}>*</span></label>
              <input type="text" id="EMAIL_ID" value={formData.EMAIL_ID} onChange={handleInputChange1} required />

              <label htmlFor="userId">Age</label>
              <input type="text" id="AGE" value={formData.AGE} onChange={handleInputChange1} />

              <label htmlFor="userId">Preferences</label>
              <input type="text" id="PREFERENCES" value={formData.PREFERENCES} onChange={handleInputChange1} />

              <label htmlFor="userId">Location</label>
              <input type="text" id="LOCATION" value={formData.LOCATION} onChange={handleInputChange1} />


            </div>
            <div className="form-footer">
              <div className='flex justify-center items-center'>
                <Button className='flex justify-center items-center' type="submit" style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }} variant="contained"> SAVE </Button>
              </div>
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
            Profile edited successfully !!
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
  events: state.ProfileDetails,
});

export default connect(mapStateToProps)(EditProfile);
