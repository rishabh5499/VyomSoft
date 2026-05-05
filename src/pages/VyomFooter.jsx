import React from 'react';

const VyomFooter = () => {
  const footerStyle = {
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#6b7280',
    borderTop: '1px solid #e5e7eb',
    marginTop: '40px',
    fontFamily: 'sans-serif'
  };

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '600'
  };

  return (
    <footer style={footerStyle}>
      <p>
        Engineered with precision by 
        <a href="https://vyomsoft.in" style={linkStyle} target="_blank" rel="noopener noreferrer">
          &nbsp;Vyomsoft
        </a>
      </p>
    </footer>
  );
};

export default VyomFooter;