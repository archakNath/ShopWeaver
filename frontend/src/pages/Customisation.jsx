import React from 'react'

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
    <div className='flex flex-col items-center justify-center h-screen'>
    <button onClick={handleChange} className='bg-blue-500 text-white px-3 py-2 rounded-xl cursor-pointer'>Change</button>
    {options[customisation]}
    </div>
  );
}

export default Customisation
