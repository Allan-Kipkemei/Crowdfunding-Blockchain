import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importing custom components
import { Sidebar, Navbar } from './components';
// Importing pages
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    // Main container for the entire app
    // - relative: allows absolutely positioned children
    // - sm:-8 p-4: applies padding and negative margin on small+ screens
    // - bg-[#13131a]: sets a dark background color
    // - min-h-screen: ensures full viewport height
    // - flex flex-row: arranges children horizontally
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

      {/* Sidebar (only visible on small+ screens) */}
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        
        {/* Navbar is always visible at the top of content area */}
        <Navbar />

        {/* Define app routes using react-router-dom */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          
          {/* Profile page route */}
          <Route path="/profile" element={<Profile />} />
          
          {/* Page for creating new campaign */}
          <Route path="/create-campaign" element={<CreateCampaign />} />
          
          {/* Campaign details page with dynamic :id param */}
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
