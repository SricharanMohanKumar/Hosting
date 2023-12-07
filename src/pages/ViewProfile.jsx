import React from 'react';
import Header2 from '../CommonComponents/Header2';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
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

const ViewProfile = ({ events }) => {
    const userData = events[0];

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logo = `${process.env.PUBLIC_URL}/logo.png`;
    const customTextColorStyle = { color: '#0c4e94', fontSize: '48px', };


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
                    <Link to="/Home/null">
                        <button style={{
                            position: 'relative', paddingLeft: '6px', paddingRight: '6px', color: '#ffffff', backgroundColor: '#ff7f7f',
                            borderRadius: '5px', float: 'right', border: 'none'
                        }}>X</button>
                    </Link>




                    {/* 
       <button style={{  position: 'absolute', paddingLeft: '6px', paddingRight: '6px', color: '#ffffff', backgroundColor: '#ff7f7f',
    borderRadius: '5px', border: 'none'}}>X</button> */}

                    <Tooltip
                        title="My Profile"
                        arrow
                        placement="right"
                        enterDelay={100}
                        leaveDelay={100}
                    >
                        <AccountCircleRoundedIcon style={{ fontSize: 40, color: '#2C2D2E' }} />
                    </Tooltip>


                    <div style={{ display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                        {userData && (
                            <div>
                                <div>

                                    <h2 style={{ fontFamily: '"Inter-Bold", Helvetica, sans-serif', fontWeight: '700', color: '#125da8', fontSize: '36px', textAlign: 'center', }}>
                                        VIEW PROFILE
                                    </h2>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'auto 2fr', rowGap: '15px', columnGap: '40px' }}>


                                    <p>
                                        FIRST_NAME
                                    </p>
                                    <p>: {userData.FIRST_NAME}
                                    </p>
                                    <p >
                                        LAST_NAME
                                    </p>
                                    <p>
                                        : {userData.LAST_NAME}
                                    </p>
                                    <p>
                                        USER_NAME
                                    </p>
                                    <p>: {userData.USER_NAME}
                                    </p>
                                    <p>EMAIL_ID</p>
                                    <p>: {userData.EMAIL_ID}</p>
                                    <p >AGE</p>
                                    <p>: {formatDescription(userData.AGE)}</p>
                                    <p>PREFERENCES </p>
                                    <p>: {userData.PREFERENCES}</p>
                                    <p>LOCATION</p>
                                    <p>: {userData.LOCATION}</p>








                                </div>
                            </div>


                        )}

                    </div>
                    <br />
                    <div className='flex justify-center items-center'>
                        <Button className='flex justify-center items-center' type="button" style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }} variant="contained" href='/#/EditProfile'> EDIT </Button>
                    </div>
                </div>

            </div>

        </div>

    );
}

const mapStateToProps = (state) => ({
    events: state.ProfileDetails,
});

export default connect(mapStateToProps)(ViewProfile);
