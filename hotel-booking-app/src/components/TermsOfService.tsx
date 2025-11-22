import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Terms of Service</h1>
      
      <div className="terms-content">
        <p><strong>Last updated:</strong> November 22, 2023</p>
        
        <section className="terms-section">
          <h2>Acceptance of Terms</h2>
          <p>By accessing or using the Luxury Hotel and Spa website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        </section>
        
        <section className="terms-section">
          <h2>Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on Luxury Hotel and Spa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        </section>
        
        <section className="terms-section">
          <h2>Disclaimer</h2>
          <p>The materials on Luxury Hotel and Spa's website are provided on an 'as is' basis. Luxury Hotel and Spa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement.</p>
        </section>
        
        <section className="terms-section">
          <h2>Limitations</h2>
          <p>In no event shall Luxury Hotel and Spa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Luxury Hotel and Spa's website.</p>
        </section>
        
        <section className="terms-section">
          <h2>Accuracy of Materials</h2>
          <p>The materials appearing on Luxury Hotel and Spa's website could include technical, typographical, or photographic errors. Luxury Hotel and Spa does not warrant that any of the materials on its website are accurate, complete or current.</p>
        </section>
        
        <section className="terms-section">
          <h2>Changes to Terms</h2>
          <p>Luxury Hotel and Spa reserves the right to modify these terms of service at any time. We will notify users of any changes by posting the new Terms of Service on this page.</p>
        </section>
        
        <section className="terms-section">
          <h2>Reservation Terms</h2>
          <p>Reservations made through our website are subject to availability. Luxury Hotel and Spa reserves the right to limit the number of rooms reserved per guest. All reservations require valid payment information.</p>
          <p>Cancellations must be made at least 48 hours prior to the scheduled arrival date to avoid penalty fees. Specific cancellation policies may vary by room type and special offers.</p>
        </section>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default TermsOfService;