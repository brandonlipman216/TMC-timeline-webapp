import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="container mx-auto px-6 pt-8">
      <div className="logo-container">
        <div className="logo-box">
          <Image 
            src="https://ml.globenewswire.com/Resource/Download/7f508b7b-14b0-4ccf-8b3d-d4a54944fbe9" 
            alt="The Metals Company Logo" 
            className="logo-image"
            width={400}
            height={100}
            priority
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </div>
  );
}
