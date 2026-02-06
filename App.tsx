
import React from 'react';
import Hero from './components/Hero';
import Concierge from './components/Concierge';

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
      <main>
        {/* The Hero component now acts as the entire landing page */}
        <Hero />
      </main>
      
      {/* Keep the Concierge for brand engagement */}
      <Concierge />
    </div>
  );
}

export default App;
