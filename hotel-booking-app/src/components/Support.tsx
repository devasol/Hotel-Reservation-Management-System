import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contact');

  const contactMethods = [
    {
      id: 1,
      method: "Email Support",
      contact: "support@luxuryhotel.com",
      responseTime: "Within 24 hours",
      description: "Send us an email and we'll respond as soon as possible."
    },
    {
      id: 2,
      method: "Phone Support",
      contact: "+251 11 660 0011",
      responseTime: "Available 24/7",
      description: "Call us directly to speak with our support team."
    },
    {
      id: 3,
      method: "Live Chat",
      contact: "Chat Now",
      responseTime: "Within 5 minutes",
      description: "Start a live chat with our support team during business hours."
    }
  ];

  const faqItems = [
    {
      id: 1,
      question: "How do I change my reservation?",
      answer: "You can modify your reservation by logging into 'My Account' and selecting 'My Reservations'. Alternatively, contact our support team with your reservation ID."
    },
    {
      id: 2,
      question: "What is your cancellation policy?",
      answer: "Cancellations must be made at least 48 hours prior to the scheduled arrival date to avoid penalty fees. Specific cancellation policies may vary by room type and special offers."
    },
    {
      id: 3,
      question: "Do you offer airport pickup?",
      answer: "Yes, we offer airport pickup services for an additional fee. Please arrange this at least 24 hours in advance through our concierge."
    },
    {
      id: 4,
      question: "What is the difference between room types?",
      answer: "Each room category offers different amenities, sizes, and views. For detailed information about each room type, visit our Rooms page."
    },
    {
      id: 5,
      question: "Can I extend my stay?",
      answer: "Yes, you can extend your stay by contacting the front desk. Subject to availability and current rates."
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center">Support Center</h1>
      
      <div className="support-tabs">
        <button 
          className={activeTab === 'contact' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>
        <button 
          className={activeTab === 'faq' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('faq')}
        >
          FAQs
        </button>
        <button 
          className={activeTab === 'request' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('request')}
        >
          Service Requests
        </button>
      </div>
      
      <div className="support-content">
        {activeTab === 'contact' && (
          <div className="contact-section">
            <h2>Get in Touch</h2>
            <p>Our support team is available to assist you with any questions or concerns. Choose the method that works best for you.</p>
            
            <div className="contact-methods">
              {contactMethods.map(method => (
                <div key={method.id} className="contact-card">
                  <h3>{method.method}</h3>
                  <p className="contact-info">{method.contact}</p>
                  <p className="response-time">{method.responseTime}</p>
                  <p>{method.description}</p>
                  <button className="btn btn-primary">Contact Now</button>
                </div>
              ))}
            </div>
            
            <div className="support-hours">
              <h3>Support Hours</h3>
              <p><strong>Monday - Friday:</strong> 24 hours</p>
              <p><strong>Saturday - Sunday:</strong> 24 hours</p>
              <p><strong>Holidays:</strong> 24 hours</p>
            </div>
          </div>
        )}
        
        {activeTab === 'faq' && (
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqItems.map(item => (
                <div key={item.id} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'request' && (
          <div className="request-section">
            <h2>Service Requests</h2>
            <p>Need something during your stay? Submit a service request and our team will assist you promptly.</p>
            
            <form className="service-request-form">
              <div className="form-group">
                <label className="form-label">Room Number</label>
                <input type="text" className="form-control" placeholder="Your room number" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Request Type</label>
                <select className="form-control">
                  <option value="">Select a service</option>
                  <option value="housekeeping">Housekeeping</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="concierge">Concierge</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Your Request</label>
                <textarea 
                  className="form-control" 
                  rows={5} 
                  placeholder="Describe your request in detail"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit Request</button>
            </form>
          </div>
        )}
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Support;