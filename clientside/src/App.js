import { Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './Navbar_PT/Navbar';
import { Footer } from './HomePage_PT/Footer/Footer';
import { AllRoutes } from './AllRoutes/AllRoutes';

import Login from './ComponentsPs/Login/LoginV';
=======
import { Data } from './component-vh/Data';

function App() {
  return (
    <Box className="App" bgColor="#0f0617" >
      <Navbar />

      <AllRoutes/>
     <Footer/>
     {/* <Login/> */}

      <AllRoutes />
      <Footer />

    </Box>
  );
}

export default App;
