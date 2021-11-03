import React from 'react';
import Navbar from '../Components/Navbar/Navbar.Component';
const DefaultLayout = (props) => {
    return (
      <>
        <Navbar />
        {props.children}
        <h1 className="text-6xl">Footer</h1>
      </>
    );
}

export default DefaultLayout;
