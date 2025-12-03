import React from 'react';
import AppNavbar from './components/AppNavbar'; 
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AppNavbar />

      <main className="pt-5" style={{ minHeight: '100vh', backgroundColor: '#F8F9FA' }}>      

        <HeroSection />

        <Services />

        <ContactForm />

      </main>

      <Footer />

    </>
  );
}

export default App;