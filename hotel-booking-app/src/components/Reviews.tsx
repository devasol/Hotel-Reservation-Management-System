import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reviews: React.FC = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2023-06-15",
      title: "Exceptional Service and Comfort",
      content: "Our stay at Luxury Hotel was absolutely wonderful. The staff went above and beyond to make our experience memorable. The room was spacious and beautifully appointed with every amenity we could ask for."
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "2023-06-10",
      title: "Perfect Getaway",
      content: "The hotel exceeded our expectations in every way. The view from our room was breathtaking, and the bed was the most comfortable we've ever experienced. Cannot wait to return!"
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 4,
      date: "2023-06-05",
      title: "Great Location and Amenities",
      content: "Located in a perfect area of the city with easy access to local attractions. The spa services were exceptional and the restaurant food was delicious. The only minor complaint was the Wi-Fi could be faster."
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 5,
      date: "2023-05-28",
      title: "Business Traveler's Paradise",
      content: "As a frequent business traveler, I can say this hotel has everything a professional needs. The workspace in the room was well-designed, and the 24-hour business center was very helpful."
    },
    {
      id: 5,
      name: "Olivia Parker",
      rating: 5,
      date: "2023-05-20",
      title: "Romantic Stay",
      content: "Booked a suite for our anniversary and it was incredibly romantic. The view of the city skyline at night was unforgettable. The staff even arranged a special dinner on our balcony."
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    title: '',
    content: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the review to a backend
    alert('Thank you for your review!');
    setNewReview({
      name: '',
      rating: 5,
      title: '',
      content: ''
    });
  };

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <div className="container">
      <h1 className="text-center">Guest Reviews</h1>
      
      <div className="reviews-container">
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                  <span className="rating-number">{review.rating}/5</span>
                </div>
              </div>
              <h4>{review.title}</h4>
              <p className="review-content">{review.content}</p>
            </div>
          ))}
        </div>
        
        <div className="review-form-container">
          <h2>Write a Review</h2>
          <form onSubmit={handleSubmitReview} className="review-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Rating</label>
              <select
                name="rating"
                className="form-control"
                value={newReview.rating}
                onChange={handleInputChange}
              >
                {[1, 2, 3, 4, 5].map(rating => (
                  <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Review Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={newReview.title}
                onChange={handleInputChange}
                placeholder="Summarize your experience"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Review</label>
              <textarea
                name="content"
                className="form-control"
                rows={5}
                value={newReview.content}
                onChange={handleInputChange}
                placeholder="Share your experience with our hotel"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit Review</button>
          </form>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Reviews;