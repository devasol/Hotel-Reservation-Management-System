import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Local Attractions Near Our Hotel",
      excerpt: "Discover the best places to visit in Addis Ababa during your stay. From cultural sites to modern attractions, we've got you covered.",
      date: "2023-06-15",
      author: "Hotel Staff",
      category: "Travel Tips"
    },
    {
      id: 2,
      title: "Luxury Spa Treatments: Which One Is Right for You?",
      excerpt: "Explore our premium spa services and find the perfect treatment to relax and rejuvenate during your stay.",
      date: "2023-06-10",
      author: "Spa Team",
      category: "Wellness"
    },
    {
      id: 3,
      title: "How to Make the Most of Your Business Travel",
      excerpt: "Tips for business travelers staying with us, including workspace setup and dining options that maximize productivity.",
      date: "2023-06-05",
      author: "Guest Experience Team",
      category: "Business Travel"
    },
    {
      id: 4,
      title: "Seasonal Events in Addis Ababa",
      excerpt: "A guide to seasonal events and festivals happening in the city. Plan your stay around these exciting events.",
      date: "2023-05-28",
      author: "Local Concierge",
      category: "Events"
    },
    {
      id: 5,
      title: "Culinary Delights: Ethiopian Cuisine Guide",
      excerpt: "Explore the flavors of Ethiopia with our guide to traditional dishes and where to find the best local cuisine.",
      date: "2023-05-20",
      author: "Executive Chef",
      category: "Food & Dining"
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center">Hotel Blog</h1>
      
      <div className="blog-intro">
        <p>Stay updated with our latest news, travel tips, and insights about luxury hospitality. Our blog features expert advice and insider knowledge to enhance your journey.</p>
      </div>
      
      <div className="blog-container">
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-post-card">
              <div className="blog-post-image" style={{ 
                height: '200px', 
                backgroundColor: '#ddd', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '8px',
                marginBottom: '15px'
              }}>
                <span>Blog Image: {post.title}</span>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <div className="blog-post-footer">
                  <span>By {post.author}</span>
                  <button className="read-more-btn">
                    <Link to={`/blog/${post.id}`} className="nav-link">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Categories</h3>
            <ul>
              <li><Link to="#">Travel Tips</Link></li>
              <li><Link to="#">Wellness</Link></li>
              <li><Link to="#">Business Travel</Link></li>
              <li><Link to="#">Food & Dining</Link></li>
              <li><Link to="#">Events</Link></li>
              <li><Link to="#">Luxury Living</Link></li>
            </ul>
          </div>
          
          <div className="sidebar-widget">
            <h3>Subscribe to Newsletter</h3>
            <p>Get the latest posts delivered right to your inbox.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your email address" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
          
          <div className="sidebar-widget">
            <h3>Popular Posts</h3>
            <ul>
              <li><Link to="#">Top 5 Local Attractions Near Our Hotel</Link></li>
              <li><Link to="#">Luxury Spa Treatments: Which One Is Right for You?</Link></li>
              <li><Link to="#">How to Make the Most of Your Business Travel</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Blog;