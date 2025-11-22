import React from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const positions = [
    {
      id: 1,
      title: "Front Desk Manager",
      department: "Guest Services",
      type: "Full-time",
      location: "Addis Ababa, Ethiopia",
      description: "Responsible for overseeing front desk operations, managing guest relations, and ensuring exceptional service standards."
    },
    {
      id: 2,
      title: "Concierge",
      department: "Guest Services",
      type: "Full-time",
      location: "Addis Ababa, Ethiopia",
      description: "Assist guests with reservations, recommendations, and special arrangements to enhance their stay experience."
    },
    {
      id: 3,
      title: "Executive Chef",
      department: "Food & Beverage",
      type: "Full-time",
      location: "Addis Ababa, Ethiopia",
      description: "Lead our culinary team in creating exceptional dining experiences for guests in our award-winning restaurants."
    },
    {
      id: 4,
      title: "Spa Manager",
      department: "Wellness",
      type: "Full-time",
      location: "Addis Ababa, Ethiopia",
      description: "Manage spa operations, staff, and services to deliver premium wellness experiences to our guests."
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Addis Ababa, Ethiopia",
      description: "Develop and implement marketing strategies to promote the hotel and drive bookings."
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center">Join Our Team</h1>
      
      <div className="careers-intro">
        <p>Luxury Hotel & Spa is an equal opportunity employer committed to creating an inclusive workplace. We offer competitive compensation, comprehensive benefits, and opportunities for career growth in a dynamic hospitality environment.</p>
      </div>
      
      <div className="careers-container">
        <div className="positions-list">
          <h2>Current Openings</h2>
          
          {positions.map(position => (
            <div key={position.id} className="position-card">
              <h3>{position.title}</h3>
              <div className="position-meta">
                <span className="department">{position.department}</span>
                <span className="type">{position.type}</span>
                <span className="location">{position.location}</span>
              </div>
              <p>{position.description}</p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
        
        <div className="careers-info">
          <h2>Why Work With Us</h2>
          <ul>
            <li>Competitive salary and performance bonuses</li>
            <li>Comprehensive health and wellness benefits</li>
            <li>Professional development and training programs</li>
            <li>Employee discount on hotel stays and services</li>
            <li>Flexible working arrangements</li>
            <li>Opportunities for career advancement</li>
          </ul>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Health & Wellness</h3>
              <p>Comprehensive health insurance, wellness programs, and access to our spa facilities.</p>
            </div>
            <div className="benefit-card">
              <h3>Professional Growth</h3>
              <p>Training programs, mentorship opportunities, and clear career paths.</p>
            </div>
            <div className="benefit-card">
              <h3>Work-Life Balance</h3>
              <p>Flexible scheduling and time-off policies to support your well-being.</p>
            </div>
            <div className="benefit-card">
              <h3>Diversity & Inclusion</h3>
              <p>We celebrate diversity and maintain an inclusive workplace for all employees.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="application-process">
        <h2>Application Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Submit Application</h3>
              <p>Complete our online application form with your details and resume.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Initial Interview</h3>
              <p>Meet with our HR team to discuss your qualifications and career goals.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Department Interview</h3>
              <p>Interview with the department head for the position you applied to.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Final Decision</h3>
              <p>Receive feedback and decision on your application.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Careers;