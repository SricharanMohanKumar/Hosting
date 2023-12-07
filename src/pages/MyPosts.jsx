import React from 'react';

import Header2 from '../CommonComponents/Header2';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePost, deletePostHome } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

import backgroundImage from '../images/bg.jpeg';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

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


const MAX_DESCRIPTION_WIDTH = 70; // Maximum characters per line for description

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

const MyPosts = ({ events }) => {

    const [open, setOpen] = React.useState(false);

    const [title, setTitle] = React.useState("");

    const dispatch = useDispatch();


    const handleOpen = (title) => {
        setTitle(title);
        setOpen(true);

    };

    const handleClose = () => {

        setOpen(false);

    };




    const deleteHandler = () => {
        handleClose();
        dispatch(deletePost(title));
        dispatch(deletePostHome(title));




        // alert("Are you sure you want to delete the post?");

    }

    // const deleteHandler = (index, title) => {
    //     setOpen(true); // Open the confirmation dialog
    //     setString(""); // Reset the string state

    //     // Store index and title in a closure to access them in handleClose
    //     const handleClose = (action) => {
    //         setOpen(false);
    //         setString(action); // Store the action ("confirm" or "cancel")

    //         // Move your deletePost dispatch logic inside the handleClose function
    //         if (action === "confirm") {
    //             // Check if the action is confirmed, then dispatch the delete actions
    //             dispatch(deletePost(index));
    //             dispatch(deletePostHome(title));
    //         }
    //     };

    //     return handleClose;
    // };

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
            <h1 className='flex justify-center' style={{ fontWeight: 'bold', fontSize: '40px', textDecoration: 'None', fontFamily: '"Inter-Bold", Helvetica, sans-serif' }}>My Posts</h1>


            {events.map((userData, index) => (userData && (
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
                        <div
                            key={index}
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
                            <Link to={`/MyPostsDisplay/${index}`}>
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


                            <div className='flex items-center float-right'>
                                <Button onClick={() => handleOpen(userData.TITLE)}>
                                    <Tooltip
                                        title="Delete"
                                        arrow
                                        placement="right"
                                        enterDelay={100}
                                        leaveDelay={100}
                                    >
                                        <DeleteIcon style={{ fontSize: 30, color: '#313131', marginRight: '10px' }} />
                                    </Tooltip>
                                </Button>
                            </div>
                            <div className='flex items-center float-right '>

                                <Link to={`/EditMyPost/${index}`} >
                                    <Button>
                                        <Tooltip
                                            title="Edit"
                                            arrow
                                            placement="left"
                                            enterDelay={100}
                                            leaveDelay={100}
                                        >
                                            <EditIcon style={{ fontSize: 30, color: '#313131', marginRight: '20px' }} />
                                        </Tooltip>

                                    </Button>
                                </Link>
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
                                Are you sure you want to delete the post?
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
                                type="submit"
                                style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }}
                                variant="contained" onClick={() => { deleteHandler(); }}> Confirm </Button>

                            <Button autofocus className='flex justify-center items-center'
                                type="submit"
                                style={{ color: "black", backgroundColor: "#D3D3D3", fontSize: "15px", fontWeight: "Bold", marginRight: "10px", marginTop: "2px", width: "100px" }}
                                variant="contained" onClick={() => handleClose()}> Cancel </Button>


                            {/* <Button autoFocus onClick={handleClose}>
            Confirm
          </Button> */}
                        </DialogActions>
                    </BootstrapDialog>
                </div>

            )))}
        </div>



    );
};
const mapStateToProps = (state) => ({
    events: state.myPosts,
});

export default connect(mapStateToProps)(MyPosts);


