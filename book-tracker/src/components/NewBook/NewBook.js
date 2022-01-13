import React from "react";
import "./NewBook.css";
import BookInput from "./BookInput";

const NewBook = (props) => {
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    console.log(bookData);
    props.onAddBook(bookData);
  };

  return (
    <div className="new-book">
      <BookInput onSaveBookData={saveBookDataHandler} />
    </div>
  );
};

export default NewBook;