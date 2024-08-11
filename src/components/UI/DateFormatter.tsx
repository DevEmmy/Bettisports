import React from 'react'

interface Props {
  dateAdded: string;
}

const DateFormatter = ({dateAdded} : Props) => {
  const date = new Date(dateAdded);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hour: number = date.getHours(); // changed to let
  let minute: string = date.getMinutes().toString(); // changed to string
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  minute = minute.padStart(2, "0"); 

  return (
    <>
      {`${month} ${day}, ${year} at ${hour}:${minute} ${ampm}`}
    </>
  )
}

export default DateFormatter