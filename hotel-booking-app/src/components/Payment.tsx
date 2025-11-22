import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Payment: React.FC = () => {
  const { roomName } = useParams<{ roomName: string }>();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  
  const [billingAddress, setBillingAddress] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  // Mock pricing
  const roomPrice = 250; // per night
  const nights = 5;
  const taxes = 125;
  const total = roomPrice * nights + taxes;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in cardDetails) {
      setCardDetails({
        ...cardDetails,
        [name]: value
      });
    } else {
      setBillingAddress({
        ...billingAddress,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    alert(`Payment of $${total} processed successfully!`);
    navigate(`/confirmation/${roomName}`);
  };

  return (
    <div className="container">
      <h1 className="text-center">Payment Information</h1>
      
      <div className="payment-container">
        <div className="payment-form">
          <h2>Payment Details</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Payment Method</label>
              <div className="payment-methods">
                <label className="radio-inline">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                  /> Credit Card
                </label>
                <label className="radio-inline">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    checked={paymentMethod === 'debit'}
                    onChange={() => setPaymentMethod('debit')}
                  /> Debit Card
                </label>
              </div>
            </div>
            
            <div className="card-details">
              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    className="form-control"
                    placeholder="MM/YY"
                    value={cardDetails.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group half">
                  <label className="form-label">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    className="form-control"
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  className="form-control"
                  placeholder="John Doe"
                  value={cardDetails.cardholderName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="billing-address">
              <h3>Billing Address</h3>
              
              <div className="form-group">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="123 Main St"
                  value={billingAddress.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    value={billingAddress.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group half">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="State"
                    value={billingAddress.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    className="form-control"
                    placeholder="ZIP"
                    value={billingAddress.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group half">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="Country"
                    value={billingAddress.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="payment-summary">
              <h3>Payment Summary</h3>
              <div className="summary-row">
                <span>Room Rate (${roomPrice}/night)</span>
                <span>${roomPrice * nights}</span>
              </div>
              <div className="summary-row">
                <span>Taxes & Fees</span>
                <span>${taxes}</span>
              </div>
              <div className="summary-row total">
                <strong>Total</strong>
                <strong>${total}</strong>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">
              Complete Payment
            </button>
          </form>
        </div>
        
        <div className="payment-info">
          <h3>Secure Payment</h3>
          <p>Your payment information is securely processed using industry-standard encryption.</p>
          
          <h3>Booking Details</h3>
          <p><strong>Room:</strong> {roomName || 'Deluxe Suite'}</p>
          <p><strong>Check-in:</strong> 2023-06-15</p>
          <p><strong>Check-out:</strong> 2023-06-20</p>
          <p><strong>Nights:</strong> {nights}</p>
          
          <h3>Payment Methods</h3>
          <p>We accept all major credit and debit cards:</p>
          <div className="payment-icons">
            <span style={{ margin: '0 5px' }}>Visa</span>
            <span style={{ margin: '0 5px' }}>Mastercard</span>
            <span style={{ margin: '0 5px' }}>American Express</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;