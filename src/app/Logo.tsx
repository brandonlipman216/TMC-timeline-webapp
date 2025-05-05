import React from 'react';

export default function Logo() {
  return (
    <div className="container mx-auto px-6 pt-8">
      <div className="logo-container">
        <div className="logo-box">
          {/* Use regular img tag to avoid any Next.js Image issues */}
          <img 
            src="https://ml.globenewswire.com/Resource/Download/7f508b7b-14b0-4ccf-8b3d-d4a54944fbe9" 
            alt="The Metals Company Logo" 
            className="logo-image"
          />
        </div>
      </div>
    </div>
  );
}
