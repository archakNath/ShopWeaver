import React from 'react'
import Sidebar from '../components/sidebar';
import Preview from '../components/preview';

function Customisation() {
  const options = [
    <div><h2>This is the Customisation Page1</h2></div>,
    <div><h2>This is the Customisation Page2</h2></div>,
  ];

  const [customisation, setCustomisation] = React.useState(1);

  const handleChange = () => {
    setCustomisation((prev) => (prev + 1) % options.length);
  };

  return(
    <div className="flex">
    <Sidebar/>
    <Preview/>
    </div>
  );
}

export default Customisation
