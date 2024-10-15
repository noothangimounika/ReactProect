import React from 'react';
import './FileDownload.css';

const FileDownload = () => {
  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="file-download-container">
      <h2>Download Files</h2>
      <button
        className="download-btn"
        onClick={() =>
          handleDownload('/path/to/your/file.pdf', 'example.pdf')
        }
      >
        Download PDF
      </button>
      <button
        className="download-btn"
        onClick={() =>
          handleDownload('/path/to/your/image.jpg', 'example.jpg')
        }
      >
        Download Image
      </button>
    </div>
  );
};

export default FileDownload;
