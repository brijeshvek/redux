import React, { useState } from 'react';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
      </div>
      <div className="accordion-body" style={{ display: isOpen ? 'block' : 'none' }}>
        <p>{content}</p>
      </div>
    </div>
    
  );
};

export default Dropdown;
