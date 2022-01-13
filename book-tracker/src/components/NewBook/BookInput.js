import React, { useState } from "react";
import "./BookInput.css";

const BookInput = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  

  const submitHandler = (e) => {
    e.preventDefault();
    const BookData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(BookData);
    props.onSaveBookData(BookData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-book_controls">
        <div className="new-book_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-book_control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-book_control">
          <label>Date</label>
          <input
            type="date"
            min="2017-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        
      </div>
      <div className="new-book_actions">
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};

export default BookInput;