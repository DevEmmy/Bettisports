import React, { useState, useEffect } from 'react';

const IsoDateConverter = ({ dateString } : any) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12; 
    const minutes = date.getMinutes();
    const ampm = date.getHours() >= 12 ? "PM" : "AM";

    setFormattedDate(`${month} ${day}, ${year} ${<br/>} ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`);
  }, [dateString]);

  return (
    <span>
      {formattedDate}
    </span>
  );
};

export default IsoDateConverter;