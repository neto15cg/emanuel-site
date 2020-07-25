import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routing from '@routes/Routing';

const App = () => {
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
};

export default App;
