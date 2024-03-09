import React from 'react';
import './Assests/scss/main.css'
import Navbar from './components/Navbar';
import TabView from './components/TabView';
import RightMenu from './components/RightMenu';


function App() {
  return (
    <>
      <Navbar />
      <RightMenu />
      <TabView />
    </>
  );
}

export default App;
