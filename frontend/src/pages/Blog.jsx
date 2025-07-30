import React from 'react';

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="section-title text-center">Our Blog</h1>
        <p className="section-subtitle text-center">Stay updated with our latest insights and news.</p>
        
        <div className="blog-grid">
          {/* Example Blog Post */}
          <div className="blog-item">
            <img src="https://via.placeholder.com/400x250/cccccc/555555?text=Blog+Post+1" alt="Blog Post 1" />
            <div className="blog-item-content">
              <h3>The Future of Web Development</h3>
              <p>Exploring new trends and technologies shaping the web.</p>
              <a href="#" className="btn-text">Read More</a>
            </div>
          </div>

          {/* Example Blog Post */}
          <div className="blog-item">
            <img src="https://via.placeholder.com/400x250/cccccc/555555?text=Blog+Post+2" alt="Blog Post 2" />
            <div className="blog-item-content">
              <h3>Mastering Responsive Design</h3>
              <p>Tips and tricks for creating truly responsive user interfaces.</p>
              <a href="#" className="btn-text">Read More</a>
            </div>
          </div>

          {/* Example Blog Post */}
          <div className="blog-item">
            <img src="https://via.placeholder.com/400x250/cccccc/555555?text=Blog+Post+3" alt="Blog Post 3" />
            <div className="blog-item-content">
              <h3>Leveraging Cloud for Scalability</h3>
              <p>How cloud computing can help your business scale efficiently.</p>
              <a href="#" className="btn-text">Read More</a>
            </div>
          </div>

          {/* Add more blog posts as needed */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
