import React from 'react';
import './PublishDate.css';
const PublishDate = (props) => {
    const day = props.date.toLocaleString("en-US", {day: '2-digit'});
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const year = props.date.getFullYear();
    return (
        <div className='publish-date'>
            <div className='publish-date_month'>{month}</div>
            <div className='publish-date_year'>{year}</div>
            <div className='publish-date_day'>{day}</div>
        </div>
    );
};

export default PublishDate;
