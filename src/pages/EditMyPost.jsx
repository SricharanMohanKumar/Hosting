import Header2 from '../CommonComponents/Header2';
import { deletePost, deletePostHome } from '../Redux/Actions';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Login.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography';
import backgroundImage from '../images/bg.jpeg';




import '../Styles/Post.css'; // Make sure to create a CSS file with the same name




import { AddEvent, AddMyPosts } from '../Redux/Actions';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const EditMyPost = ({ someData }) => {

  const [open, setOpen] = React.useState(false);


  const handleOpen = (e) => {
    e.preventDefault();
    if (formData.AGE_FROM >= formData.AGE_TO || formData.AGE_FROM<=0 || formData.AGE_TO<=0) {
      // Handle the case where AGE_FROM is greater than or equal to AGE_TO
      // For example, show an error message or prevent form submission
      alert("Invalid age entry");
      return; // Stop further execution
    }

    setOpen(true);
    
  };

  const handleClose = () => {

    setOpen(false);
    HandleSubmit();
  };

  const { id } = useParams();


  const userData = someData[id];
  const navigate = useNavigate();
  const dateParsed = new Date(userData.DATE);
  const dateString = dateParsed.toISOString().split('T')[0];
const ageString=userData.AGE;
const [fromAge, toAge] = ageString.split('-').map(Number);

const timeString = "08:00-22:00"; // Replace this with your time string
const [startTime, endTime] = timeString.split("-");


  


  const [formData, setFormData] = useState({




    TITLE: userData.TITLE,
    DATE: dateString,
    TIME_SLOTS: userData.TIME_SLOTS,
    LOCATION: userData.LOCATION,
    AGE_FROM: fromAge,
    AGE_TO: toAge,
    START_TIME: startTime,
    END_TIME: endTime,
    DESCRIPTION: userData.DESCRIPTION,
    TEACHING: userData.TEACHING,
    PHYSICAL_REQUIREMENT: userData.PHYSICAL_REQUIREMENT,
    CONTACT_DETAILS: {
      NAME: userData.CONTACT_DETAILS.NAME,
      EMAIL: userData.CONTACT_DETAILS.EMAIL,
      PHONE: userData.CONTACT_DETAILS.PHONE,
      SOCIAL_MEDIA_ID: userData.CONTACT_DETAILS.SOCIAL_MEDIA_ID,
    },
    ORGANIZED_BY: userData.ORGANIZED_BY,
    PERKS: userData.PERKS,
  });



  const dispatch = useDispatch();


  const handleInputChange1 = (e) => {
    const { id, value } = e.target;
  
    // Update nested fields by splitting the ID
    const keys = id.split('.');
    if (keys.length === 2) {
      const [parentKey, childKey] = keys;
  
      setFormData({
        ...formData,
        [parentKey]: {
          ...formData[parentKey],
          [childKey]: value,
        },
      });
    } else {
      // Update non-nested fields
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };
   

  // const handleInputChange1 = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });
  // };
  const handleRadioChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, 'TEACHING': value });
  };
  const handleRadioChange1 = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, 'PHYSICAL_REQUIREMENT': value });
  };
  const HandleSubmit = () => {

    const ageRange = `${formData.AGE_FROM}-${formData.AGE_TO}`;
    const timeRange = `${formData.START_TIME}-${formData.END_TIME}`;

  // Create a copy of formData, excluding AGE_FROM and AGE_TO
  const { AGE_FROM, AGE_TO,START_TIME, END_TIME, ...formDataWithoutAges } = formData;

  // Update formData with the merged age range
  const updatedFormData = {
    ...formDataWithoutAges,
    AGE: ageRange,
    TIME_SLOTS: timeRange
  };

    // const updatetedData=[...eventData,formData];
    dispatch(deletePost(updatedFormData.TITLE));
    dispatch(AddMyPosts(updatedFormData));
    dispatch(deletePostHome(updatedFormData.TITLE));
    dispatch(AddEvent(updatedFormData));

    navigate('/MyPosts');
    // Reset the form data after submission

  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain', // Change to 'contain'
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        zIndex: '0',
        // Other styles for your content
      }}
    >
      <Header2 />
      <div>
        <div className="flex justify-center items-center ">
          <div className="form-container">
            <Link to="/MyPosts">
              <button className="close-button">X</button>
            </Link>
            <form onSubmit={handleOpen}>
              <h2 className='signup-text'>CREATE VOLUNTEER OPPURTUNITY</h2>

              <div className="input-group justify-center" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', alignItems: 'center' }}>
                <label htmlFor="title">TITLE <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="TITLE" value={formData.TITLE} onChange={handleInputChange1} required readOnly />

                <label htmlFor="userId">DATE <span style={{ color: "red" }}>*</span></label>
                <input type="DATE" id="DATE" value={formData.DATE} onChange={handleInputChange1} required />

                {/* <label htmlFor="password">TIME SLOTS<span style={{ color: "red" }}>*</span></label>
                <div>
                  <input type="text" id="TIME_SLOTS" value={formData.TIME_SLOTS} onChange={handleInputChange1} required />
                </div> */}

<label htmlFor="password">TIME SLOTS<span style={{ color: "red" }}>*</span></label>
<div>
  <input
    type="time"
    id="START_TIME"
    value={formData.START_TIME}
    onChange={handleInputChange1}
    style={{ width: '78px' }} 
    required
  />
   <span>&nbsp;&nbsp;to</span>
  <input
    type="time"
    id="END_TIME"
    value={formData.END_TIME}
    onChange={handleInputChange1}
    style={{ width: '78px' }} 
    required
  />
</div>

                <label htmlFor="userId">LOCATION <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="LOCATION" value={formData.LOCATION} onChange={handleInputChange1} required />




{/* /////////// */}
                {/* <label htmlFor="password">AGE<span style={{ color: "red" }}>*</span></label> */}
                {/* <div> */}
                {/* <input type="text" id="AGE" value={formData.AGE} onChange={handleInputChange1} required /> */}
                {/* <input style={{width:'100px'}} type="number" id="AGE" value={formData.AGE} onChange={mergeAgesAndStore} />  */}
                {/* </div> */}
{/* /////////// */}
<label htmlFor="password">AGE Range<span style={{ color: "red" }}>*</span></label>
<div style={{ display: 'flex', gap: '5px' }}>
<input
    type="number"
    id="AGE_FROM"
    value={formData.AGE_FROM}
    onChange={handleInputChange1}
    required
    style={{ width: '73px' }} // Adjust the width as needed
  />
  <span>&nbsp;&nbsp;to</span>
  <input
    type="number"
    id="AGE_TO"
    value={formData.AGE_TO}
    onChange={handleInputChange1}
    required
    style={{ width: '73px' }} // Adjust the width as needed
  />
</div>

{/* /////////// */}

                <label htmlFor="userId">DESCRIPTION <span style={{ color: "red" }}>*</span></label>
                <textarea id="DESCRIPTION" value={formData.DESCRIPTION} onChange={handleInputChange1} />

                <label htmlFor="teaching">TEACHING</label>

                <RadioGroup
                  value={formData.TEACHING}
                  onChange={handleRadioChange}
                  style={{ flexDirection: 'row', marginLeft: '20px' }}
                  id="TEACHING"
                // Adjusts the direction of Radio buttons
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>


                <label htmlFor="physical_requirement">PHYSICAL REQUIREMENT</label>
                <RadioGroup
                  value={formData.PHYSICAL_REQUIREMENT}
                  onChange={handleRadioChange1}
                  style={{ flexDirection: 'row', marginLeft: '20px' }}
                  id="PHYSICAL_REQUIREMENT"
                // Adjusts the direction of Radio buttons
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <label htmlFor="userId">CONTACT DETAILS</label>
                <div></div>

                <label htmlFor="userId">&emsp; &nbsp;Name <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="CONTACT_DETAILS.NAME" value={formData.CONTACT_DETAILS.NAME} onChange={handleInputChange1} required />

                <label htmlFor="userId">&emsp; &nbsp;Email <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="CONTACT_DETAILS.EMAIL" value={formData.CONTACT_DETAILS.EMAIL} onChange={handleInputChange1} required />

                <label htmlFor="userId">&emsp; &nbsp;Phone <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="CONTACT_DETAILS.PHONE" value={formData.CONTACT_DETAILS.PHONE} onChange={handleInputChange1} required />

                <label htmlFor="userId">&emsp; &nbsp;Social Media Id:</label>
                <input type="text" id="CONTACT_DETAILS.SOCIAL_MEDIA_ID" value={formData.CONTACT_DETAILS.SOCIAL_MEDIA_ID} onChange={handleInputChange1} />

                <label htmlFor="userId">ORGANIZED BY <span style={{ color: "red" }}>*</span></label>
                <input type="text" id="ORGANIZED_BY" value={formData.ORGANIZED_BY} onChange={handleInputChange1} required />

                <label htmlFor="userId">PERKS</label>
                <input type="text" id="PERKS" value={formData.PERKS} onChange={handleInputChange1} />



              </div>
              <div className="form-footer">
                <div className='flex justify-center items-center'>
                  <Button className='flex justify-center items-center' type="submit" style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }} variant="contained" > EDIT </Button>

                </div>
              </div>

            </form>

          </div>
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
            Post edited successfully !!
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
            variant="contained" onClick={() => { handleClose(); }}>

            Okay </Button>




        </DialogActions>
      </BootstrapDialog>

    </div>
  );
}

const mapStateToProps = (state) => ({
  someData: state.myPosts,
});

export default connect(mapStateToProps)(EditMyPost);