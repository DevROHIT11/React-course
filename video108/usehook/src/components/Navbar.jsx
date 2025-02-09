import React, { useEffect } from 'react';

const Navbar = ({ color }) => {

  // Case 1: This will run on every render.
  useEffect(() => {
    alert("Heyy I will render always");
  });

  // Case 2: This will run only once when the page is loaded.
  useEffect(() => {
    alert("Heyy I will render only once when the page is loaded");
  }, []);

  // Case 3: This will run when the `color` prop changes.
  useEffect(() => {
    alert("Heyy I will render when color is changed");
  }, [color]);

// Example of cleanup function --> when we unmount any component
useEffect(() => {
  alert('I will Run when the app.jsx loaded')

//   return is used any component is unmoutned and we want pass the message that component is unmouted
  return () => {
   alert('Navbar is ummounted')
  }
}, [])


  return (
    <div>
      hey I'm navbar of {color}
    </div>
  );
}

export default Navbar;
