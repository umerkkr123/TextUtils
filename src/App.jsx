import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (

    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze" buttonName="Submit" />} />
    </Routes>
     {/* <div>
      {showAlert && (
        <Alert
          message="This is a success message!"
          type="success"
          onClose={handleClose}
        />
      )} */}
    {/* </div> */}
    </Router>

  )
}

export default App
