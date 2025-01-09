import React from 'react';
import './PriceSection.css';

const PriceSection = () => {
  return (
    <div className="price-section">
      <h2 className="text-center">Choose Your Plan</h2>
      <div className="container pr">
        <div className="row justify-content-center">
          {/* Basic Plan */}
          <div className="col-md-4 p">
            <div className="price-card">
              <h3>Basic Plan</h3>
              <p className="price">599/month</p>
              <ul>
                <li>✔ 10GB Storage</li>
                <li>✔ Basic Support</li>
                <li>✔ Access to Core Features</li>
              </ul>
              <button className="btn-3d">Get Started</button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-md-4 p">
            <div className="price-card popular">
              <h3>Standard Plan</h3>
              <p className="price">899/month</p>
              <ul>
                <li>✔ 50GB Storage</li>
                <li>✔ Priority Support</li>
                <li>✔ Access to All Features</li>
                <li>🔥 Best Value!</li>
              </ul>
              <button className="btn-3d">Get Started</button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-4 p">
            <div className="price-card">
              <h3>Premium Plan</h3>
              <p className="price">1199/month</p>
              <ul>
                <li>✔ Unlimited Storage</li>
                <li>✔ 24/7 Premium Support</li>
                <li>✔ Exclusive Features</li>
                <li>✨ VIP Community Access</li>
              </ul>
              <button className="btn-3d">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
