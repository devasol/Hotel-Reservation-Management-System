import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes your hotel a luxury destination?",
      answer: "Our hotel offers a unique blend of exquisite design, unparalleled service, and top-tier amenities. We provide spacious suites, elegant rooms, and exclusive penthouses with stunning views."
    },
    {
      question: "What types of accommodations do you offer?",
      answer: "We provide a range of luxurious accommodations, including standard rooms, suites, and exclusive penthouses. Each room category features modern amenities and elegant furnishings."
    },
    {
      question: "How can I make a reservation?",
      answer: "Reservations can be made through our website, by contacting our reservations team directly, or via partnered travel agencies. You can also use our online booking system."
    },
    {
      question: "What amenities does the luxury hotel offer?",
      answer: "Our hotel boasts a range of upscale amenities, including multiple restaurants, a spa and wellness center, fitness facilities, a swimming pool, business center, and more."
    },
    {
      question: "What is your check-in and check-out policy?",
      answer: "Check-in is from 14:00 until 23:30, and check-out is from 08:00 until 11:00. Early check-in and late check-out may be available based on availability."
    },
    {
      question: "Do you offer parking?",
      answer: "Yes, we offer parking for over 500 cars. Valet parking service is also available for your convenience."
    },
    {
      question: "Is Wi-Fi available throughout the hotel?",
      answer: "Yes, we offer complimentary high-speed Wi-Fi throughout the property, including all guest rooms and public areas."
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center">Frequently Asked Questions</h1>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default FAQ;