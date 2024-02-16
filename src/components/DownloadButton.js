import React from 'react';

const DownloadButton = ({fileName, filePath, buttonLabel}) => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName;
    downloadLink.href = filePath;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink)
  };
  return (
    <button onClick={handleDownload}>{buttonLabel}</button>
  )
}

export default DownloadButton;