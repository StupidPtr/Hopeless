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
          <div className="wrapper-1">
            <div className="footer-column">
              <ul>              
                <li>Reach us</li>
                <li>+012 3456 789</li>
                <li>demo@gmail.com</li>
                <li>132 Dartmouth Street Boston,<br /> Massachusetts 02156 United States</li>
              </ul>
            </div>
          </div>
          <div className="wrapper-2">
            <div className="footer-column">
              <ul>
                <li>Company</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms & Services</li>
                <li>Terms of Use</li>
                <li>Refund Policy</li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li>Quick Links</li>
                <li>Techlabz Keybox</li>
                <li>Downloads</li>
                <li>Forum</li>
              </ul>
            </div>
          </div>
          <div className="wrapper-3">
            <div className="container-footer">
              <h4 className="footer-h4">Join Our Newsletter</h4>
              <div className="footer-form">
                <input type="email" placeholder="Your email address" />
                <button>Subscribe</button>
              </div>
              <p className="footer-description">* Will send you weekly updates for your better food management</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}