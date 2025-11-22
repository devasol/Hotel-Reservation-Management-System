import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Privacy Policy</h1>
      
      <div className="privacy-content">
        <p><strong>Last updated:</strong> November 22, 2023</p>
        
        <section className="policy-section">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a reservation, or contact us for support. This may include your name, email address, phone number, and payment information.</p>
        </section>
        
        <section className="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and manage your reservations</li>
            <li>Communicate with you about your reservation</li>
            <li>Provide customer service</li>
            <li>Send you promotional materials (with your consent)</li>
            <li>Improve our services</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>
        
        <section className="policy-section">
          <h2>Third-Party Services</h2>
          <p>We may employ third-party companies and individuals to facilitate our services, provide the service on our behalf, or perform service-related services. These third parties have access to your personal information only to perform these tasks on our behalf.</p>
        </section>
        
        <section className="policy-section">
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information.</p>
        </section>
        
        <section className="policy-section">
          <h2>Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </section>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;