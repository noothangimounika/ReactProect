import React, { useState } from 'react';

const TextSearchHighlight = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [text] = useState(`This is a sample long text document. You can search for specific words, 
  and those words will be highlighted. Let's see how the search and highlight feature works.`);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => 
      regex.test(part) ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search text..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: '5px', marginBottom: '20px', width: '300px' }}
      />
      <div style={{ lineHeight: '1.6' }}>
        {getHighlightedText(text, searchTerm)}
      </div>
    </div>
  );
};

export default TextSearchHighlight;
