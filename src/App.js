/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import JobListingGallery from './Components/JobListingGallery';

function App() {
 return (
  <div className='App'>
   <div className='Background'>
    <div className='Background--Header' />
    <JobListingGallery />
   </div>
  </div>
 );
}

export default App;
