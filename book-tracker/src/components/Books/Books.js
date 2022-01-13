import React, { useState } from 'react';
import BookDetail from './BookDetail';
import './Books.css';
import BooksFilter from './BooksFilter';
import Card from '../UI/Card';


function Books(props) {
    const [selectedYear, setSelectedYear] = useState("2022");

    const filterChangeHandler = (choosenYear) => {
        setSelectedYear(choosenYear);
    };

    const filteredBooks = props.items.filter((book) => {
        return book.date.getFullYear().toString() === selectedYear;
    });

    if (props.items.length === 0) {
        return (
            <Card className="books" style={{backgroundColor: 'black'}}>
                <h1 style={{ color: 'white' }}>NO BOOKS</h1>
            </Card>
        );
    } else {
        return (
            <Card className='books'>
                <BooksFilter
                    choosen={selectedYear}
                    onChangeFilter={filterChangeHandler} />
                {filteredBooks.map((book) => (
                    <BookDetail
                        title={book.title}
                        price={book.price}
                        date={book.date}
                        key={book.id}
                        author={book.author} />
                        
                ))}
            </Card>
        );
    }

}

export default Books;
