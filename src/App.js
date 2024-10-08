import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timeline from './components/Timeline';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        {/* <Route path="/" element={<SendEmailForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/challenge1" element={<Challenge1 />} />
          <Route path="/challenge2" element={<Challenge2 />} />
          <Route path="/challenge3" element={<Challenge3 />} />
          <Route path="/challenge4" element={<Challenge4 />} />
          <Route path="/final" element={<Final />} /> */}
          <Route path="/" element={<Timeline />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
