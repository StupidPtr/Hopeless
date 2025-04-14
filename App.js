import React from 'react';
import './App.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Logo Here</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#" className="active">Contact</a>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-title">
          <h2>Contact Us</h2>
          <p>Any question or remark? Just write us a message!</p>
        </div>
        <div className="contact-container">
          {/* Left Panel */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Say something to start a live chat!</p>
            <div className="info-details">
              <p><strong>Phone:</strong> +012 3456 789</p>
              <p><strong>Email:</strong> demo@gmail.com</p>
              <p><strong>Address:</strong><br />132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</p>
            </div>
            <div className="social-icons">
              <button className="icon">A</button>
              <button className="icon">B</button>
              <button className="icon">C</button>
            </div>
          </div>

          {/* Right Form */}
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="form-radio-group">
              <label className="label-select">Select Subject?</label>
              <div className="radio-options">
                <label><input type="radio" name="subject" /> General Inquiry</label>
                <label><input type="radio" name="subject" /> General Inquiry</label>
                <label><input type="radio" name="subject" /> General Inquiry</label>
                <label><input type="radio" name="subject" /> General Inquiry</label>
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-logo">Logo Here</p>
        <div className="footer-container">
          <div className="footer-column">
            <h4>Reach us</h4>
            <p>+012 3456 789</p>
            <p>demo@gmail.com</p>
            <p>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <p>About</p>
            <p>Contact</p>
            <p>Blogs</p>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms & Services</p>
            <p>Refund Policy</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <p>Techlabz Keybox</p>
            <p>Downloads</p>
            <p>Forum</p>
          </div>
          <div className="footer-column footer-email-button">
            <h4 className="footer-h4">Join Our Newsletter</h4>
            <div className="footer-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <p className="footer-description">* Will send you weekly updates for your better food management</p>
          </div>
        </div>
      </footer>
    </div>
  );
}