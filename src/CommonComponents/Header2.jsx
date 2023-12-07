import React, {useState} from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



const Header2 = () => {

  const [searchString, setSearchString]=useState("");

  const searchHandler= () => {
    setSearchString(document.getElementById("search").value);
  }

  const headerStyle = {
    borderRadius: '0px 0px 0px 40px',
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const logo = `${process.env.PUBLIC_URL}/logo.png`;
  const customTextColorStyle = { color: '#0c4e94', fontSize: '48px', };

  return (
    <div>
      <header className="bg-myBlue text-white p-4 fixed w-full" style={headerStyle}>
        <div className="container mx-auto flex items-center space-x-14">
          <div className=" flex items-center object-contain -m-2"> {/* This container will hold the logo */}
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto "
            />
          </div>
          <div >
            <Link to={'/Home/null'} >
              <Tooltip
                title="Home Page"
                arrow
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <CottageIcon style={{ fontSize: 40, color: 'Black' }} />
              </Tooltip>
            </Link>
          </div>
          <div className=' px-40'>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                onChange={searchHandler}
                id="search"
                className="bg-white text-gray-800 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-96"
              />
              <div className="absolute right-3 top-2 ">
                {/* You can add a search icon or button here */}
                <Link to={`/Home/${searchString}`} >
                  <Tooltip
                    title="Search"
                    arrow
                    placement="right"
                    enterDelay={100}
                    leaveDelay={100}
                  >
                    <SearchIcon style={{ color: 'grey' }} />
                  </Tooltip>
                </Link>
                <path
                  fillRule="evenodd"
                  d="M14.742 13.016a8.5 8.5 0 111.414-1.414l4.85 4.85a1 1 0 01-1.415 1.415l-4.85-4.85zM15 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                  clipRule="evenodd"
                />

              </div>
            </div>
          </div>
          <div>
          <button onClick={handleClick1} varient="contained">
              <Tooltip
                title="Filter"
                arrow
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <FilterAltIcon style={{ fontSize: 40, color: 'Black' }} />
              </Tooltip>
           </button>


           <Menu
              anchorEl={anchorEl1} // Use anchorEl1 for positioning
              open={Boolean(anchorEl1)}
              onClose={handleClose1}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Adjust as needed
              transformOrigin={{ vertical: 'top', horizontal: 'right' }} // Adjust as needed
              getContentAnchorEl={null}
            >
       

        <MenuItem onClick={handleClose1} component={Link} to="/Home/age40plus">Age 40+</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/Home/age40minus">Age 40-</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/Home/teaching">Teaching</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/Home/physical">Physical Requirement</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/Home/perks">With perks</MenuItem>
      </Menu>

          </div>
          <div>
            <Link to="/Post">
              <button className=" bg-gray-300 text-black py-2 px-4 rounded-md" >POST</button>
            </Link>
          </div>
          <div>
            <button onClick={handleClick} varient="contained">
              <Tooltip
                title="My Profile"
                arrow
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <AccountCircleRoundedIcon style={{ fontSize: 40, color: 'Black' }} />
              </Tooltip>
            </button>

          </div>
        </div>
      </header>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* MenuItem with onClick event */}

        <MenuItem onClick={handleClose} component={Link} to="/ViewProfile">View Profile</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/EditProfile">Edit Profile</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/MyEvents">My Events</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/MyPosts">My Posts</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/">Log Out</MenuItem>
      </Menu>
{/* 
      <Menu
        anchorEl1={anchorEl1}
        open={Boolean(anchorEl1)}
        onClose={handleClose1}
      >
       

        <MenuItem onClick={handleClose1} component={Link} to="/ViewProfile">Age</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/EditProfile">Edit Profile</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/MyEvents">My Events</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/MyPosts">My Posts</MenuItem>
        <MenuItem onClick={handleClose1} component={Link} to="/">Log Out</MenuItem>
      </Menu> */}
    </div>
  );
};

export default Header2;