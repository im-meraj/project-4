import React from 'react';

const DefaultLayout = (props) => {
    return (
      <>
        <h1 className="text-6xl">Navbar</h1>
        {props.children}
        <h1 className="text-6xl">Footer</h1>
      </>
    );
}

export default DefaultLayout;
