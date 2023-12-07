import React from 'react';
import Header1 from '../CommonComponents/Header1';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import backgroundImage from '../images/bg.jpeg';



const LandingPage = () => {

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
            <div className=" flex justify-center items-center h-screen">
                <div style={{ width: 818, height: 244, textAlign: 'center', color: 'black', fontSize: 60, fontFamily: '"Inter-Bold", Helvetica, sans-serif', fontWeight: '400', wordWrap: 'break-word' }}>
                    <p >
                        Welcome to Volunteer Wave! If you're new, please sign up.<br />
                        <span style={{  textAlign: 'center', color: 'black', fontSize: 20, fontFamily: '"Inter-Bold", Helvetica, sans-serif', fontWeight: '400', wordWrap: 'break-word' }}>
                        "Discover, create, and manage volunteering opportunities for impactful change."</span>
                    </p>
                    <Button style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "20px", fontWeight: "Bold", marginRight: "10px", width: "150px" }} variant="contained" href="/#/Login"> LOGIN </Button>
                    <Button style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "20px", fontWeight: "Bold", width: "150px" }} variant="contained" href="/#/SignUp"> SignUp </Button>
                </div>
            </div>
        </div>
    );
};
export default LandingPage;