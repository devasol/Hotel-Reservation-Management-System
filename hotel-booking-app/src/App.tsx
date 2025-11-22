import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Reservation from './components/Reservation';
import BookNow from './components/BookNow';
import Admin from './components/Admin';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import MyAccount from './components/MyAccount';
import BookingConfirmation from './components/BookingConfirmation';
import Payment from './components/Payment';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import NewsletterSignup from './components/NewsletterSignup';
import SpecialOffers from './components/SpecialOffers';
import RoomDetails from './components/RoomDetails';
import ThankYou from './components/ThankYou';
import Reviews from './components/Reviews';
import Careers from './components/Careers';
import Blog from './components/Blog';
import Support from './components/Support';
import SiteMap from './components/SiteMap';
import NotFound from './components/NotFound';
import './styles/App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/room/:roomName" element={<RoomDetails />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/book/:roomName" element={<BookNow />} />
                <Route path="/payment/:roomName" element={<Payment />} />
                <Route path="/confirmation/:roomName" element={<BookingConfirmation />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/support" element={<Support />} />
                <Route path="/sitemap" element={<SiteMap />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/account" element={<MyAccount />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/newsletter" element={<NewsletterSignup />} />
                <Route path="/offers" element={<SpecialOffers />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;