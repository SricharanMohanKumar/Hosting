import React, { useState, useEffect } from 'react';
import eventData from '../Data/EventData';
import Header2 from '../CommonComponents/Header2';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import backgroundImage from '../images/bg.jpeg';


const MAX_DESCRIPTION_WIDTH = 130; // Maximum characters per line for description

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

const Home = ({ events }) => {

    const { sid } = useParams();




    const filterData = () => {
        // Create an empty array to store the filtered data
        let tempData = [];
        let sidTemp = sid.replace(/%20/g, ' ');

        // Use Array.prototype.filter() to filter the events based on conditions
        if (sidTemp === "null") {
            tempData = events; // Assign all events if sid is "null"
        } else if (sidTemp === "age40plus") {
            tempData = events.filter((userData) => /^[4-9][0-9]/.test(userData.AGE));
        }
        else if (sidTemp === "age40minus") {
            tempData = events.filter((userData) => /^(?:[0-3]?\d|[1-3]\d{2}|[1-9])(?![0-9])/u.test(userData.AGE));
        }
        else if (sidTemp === "physical") {
            tempData = events.filter((userData) => userData.PHYSICAL_REQUIREMENT.toUpperCase() === "YES");
        }
        else if (sidTemp === "perks") {
            tempData = events.filter((userData) => userData.PERKS.toUpperCase() !== "");
        }
        else if (sidTemp === "teaching") {
            tempData = events.filter((userData) => userData.TEACHING.toUpperCase() === "YES");
        }
        else {
            tempData = events.filter((userData) => userData.TITLE.toUpperCase().includes(sidTemp.toUpperCase()));
            // Filter events where the TITLE matches sid and assign them to tempData
        }

     


        // Return the filtered data
        return tempData;

    };
    const tempFilteredData = filterData();

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


            <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', flexWrap: 'wrap' }}>
                {tempFilteredData.map((userData, index) => (
                    <div
                        key={index}
                        style={{
                            width: '95%',
                            height: 'auto',
                            margin: '20px',
                            padding: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            background: '#D5F0F8',
                        }}
                    >
                        <Link to={`/OnClickData/${userData.TITLE}`}>
                            <h2 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.5em', textAlign: 'left' }}>
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

                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {tempFilteredData.length === 0 && (
                <div>
                    <h2>No search results found</h2>
                    {/* You can add additional UI or messages here */}
                </div>
            )}

        </div>
    );
};
const mapStateToProps = (state) => ({
    events: state.events,
});

export default connect(mapStateToProps)(Home);


