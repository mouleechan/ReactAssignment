import React from 'react'
import './BooksFilter.css';

const BooksFilter = (props) => {
    const dropDownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    };

    
    return (
        <div className='books-filter'>
            <div className='books-filter_control'>
                <label>Filter by year</label>
                <select value={props.choosen} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    );
};

export default BooksFilter;
