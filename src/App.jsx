import React from 'react';
import AppNavbar from './components/AppNavbar'; 
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <AppNavbar />

      <main className="pt-5" style={{ minHeight: '100vh', backgroundColor: '#F8F9FA' }}>      

        <HeroSection />

        <Services />

        <ContactForm />

        <h1 className="text-center mt-5 pt-5">Em Construção...</h1>
      </main>

    </>
  );
}

export default App;