import React from 'react';
import Card from '../UI/Card'; 
import PublishDate from './PublishDate/PublishDate';
import './BookDetail.css';
function BookDetail(props) {
    return (
        <Card className='book-detail'>
            <PublishDate date={props.date} />
            <div className='book-detail_description'>
                <h2>{props.title}</h2>
                <div className="book-detail_price ">Rs.{props.price}</div>
            </div>
        </Card>
    );
}

export default BookDetail;
