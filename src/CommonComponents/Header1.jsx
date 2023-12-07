import React from 'react';

const Header1 = () => {
  const headerStyle = {
    borderRadius: '0px 0px 0px 40px',
  };
  const logo = `${process.env.PUBLIC_URL}/logo.png`;
  const customTextColorStyle = { color: '#0c4e94', fontSize: '48px', };
  return (
    <header className="bg-myBlue text-white p-4 fixed w-full" style={headerStyle}>
    <div className="container mx-auto flex items-center justify-center">
      <div className="flex items-center object-contain -m-2"> {/* This container will hold the logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-14 w-auto "
        />
      </div>
      <div className="mx-auto"> {/* This container will hold the text and be pushed to the right */}
      <h1 className="text-2xl font-bold font-serif" style={{ ...customTextColorStyle, fontFamily: '"Inter-Bold", Helvetica, sans-serif' }}>VOLUNTEER WAVE</h1>
        {/* Add more content here if needed */}
      </div>
    </div>
  </header>
  );
};

export default Header1;