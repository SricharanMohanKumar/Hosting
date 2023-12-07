import React from 'react';
import eventData from '../Data/EventData';
import { useParams } from 'react-router-dom';
import Header2 from '../CommonComponents/Header2';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import backgroundImage from '../images/bg.jpeg';


const MAX_DESCRIPTION_WIDTH = 35;

function formatDescription(description) {
  const words = description.split(' ');
  let currentLine = '';
  const formattedLines = [];

  words.forEach((word) => {
    if ((currentLine + word).length <= MAX_DESCRIPTION_WIDTH) {
      currentLine += `${word} `;
    } else {
      formattedLines.push(currentLine.trim());
      currentLine = `${word} `;
    }
  });

  formattedLines.push(currentLine.trim());

  return formattedLines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < formattedLines.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

const LandingPage = ({ events }) => {

  const { id } = useParams();
  const userData = events[id];





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

      {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
      <Header2 />
      <div style={{ height: '90px' }}>   </div>


      <div className='justify-center items-center' style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>

        <div
          key={id}
          style={{
            width: '60%',
            height: 'auto',
            margin: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            background: '#D5F0F8',



          }}
        >
          <Link to="/MyEvents">
            <button style={{
              position: 'relative', paddingLeft: '6px', paddingRight: '6px', color: '#ffffff', backgroundColor: '#ff7f7f',
              borderRadius: '5px', float: 'right', border: 'none'
            }}>X</button>
          </Link>




          {/* 
       <button style={{  position: 'absolute', paddingLeft: '6px', paddingRight: '6px', color: '#ffffff', backgroundColor: '#ff7f7f',
    borderRadius: '5px', border: 'none'}}>X</button> */}



          <div style={{ display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center' }}>

            {userData && (
              <div>
                <h2 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.5em' }}>
                  <u>{userData.TITLE.toUpperCase()}</u>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 2fr' }}>


                  <p>
                    DATE
                  </p>
                  <p>: {userData.DATE}
                  </p>
                  <p>
                    TIME SLOTS
                  </p>
                  <p>
                    : {userData.TIME_SLOTS}
                  </p>
                  <p>
                    LOCATION
                  </p>
                  <p>: {userData.LOCATION}
                  </p>
                  <p>AGE</p>
                  <p>: {userData.AGE}</p>
                  <p>DESCRIPTION</p>
                  <p>: {formatDescription(userData.DESCRIPTION)}</p>
                  <p>TEACHING </p>
                  <p>: {userData.TEACHING}</p>
                  <p>PHYSICAL REQUIREMENT</p>
                  <p>: {userData.PHYSICAL_REQUIREMENT}</p>

                  <p>CONTACT DETAILS</p>
                  <p></p>

                  <p> &emsp; NAME</p>
                  <p>: {userData.CONTACT_DETAILS.NAME}</p>

                  <p> &emsp; EMAIL</p>
                  <p>: {userData.CONTACT_DETAILS.EMAIL}</p>

                  <p> &emsp; PHONE</p>
                  <p>: {userData.CONTACT_DETAILS.PHONE}</p>

                  <p> &emsp; SOCIAL MEDIA ID</p>
                  <p>: {userData.CONTACT_DETAILS.SOCIAL_MEDIA_ID}</p>

                  <p>ORGANIZED BY</p>
                  <p>: {userData.ORGANIZED_BY}</p>

                  <p>PERKS</p>
                  <p>: {userData.PERKS}</p>
                </div>
              </div>


            )}

          </div>
          <br />
          <div className='flex justify-center items-center'>
            {/* <Button className='flex justify-center items-center' type="submit" style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }} variant="contained" href="/#/Home"> REGISTER </Button> */}
          </div>
        </div>

      </div>

    </div>

  );
}

const mapStateToProps = (state) => ({
  events: state.myEvents,
});

export default connect(mapStateToProps)(LandingPage);
