import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <p id="read-more">
      {isTruncated ? `${text.slice(0, maxLength)}...` : text}
      <span className='read-more-toggle' onClick={toggleTruncate}>
        {isTruncated ? 'Read More' : 'Show Less'}
      </span>
    </p>
  )
}

export default ReadMore;
