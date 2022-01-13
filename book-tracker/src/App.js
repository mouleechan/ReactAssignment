import './App.css';
import React, {useState} from 'react';
import Books from './components/Books/Books';
import NewBook from './components/NewBook/NewBook';

const SAMPLE_BOOKS = [
  {
    id: "b1",
    title: "Javascript Guide",
    price: 2300,
    date: new Date(2018, 8, 14),
  },
  {
    id: "b2",
    title: "Frontend Basics",
    price: 899,
    date: new Date(2020, 1, 22),
  },
  {
    id: "b3",
    title: "Machine Learning",
    price: 2900,
    date: new Date(2019, 5, 18),
  },
  {
    id: "b4",
    title: "Basics of Reactjs",
    price: 1990,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[bookList, setBookList] = useState(SAMPLE_BOOKS);

  const addBookHandler = (book) => {
    console.log("App.js");
    setBookList((prevBooks) => {
      return [book, ...prevBooks];
    });
    console.log(bookList);
  };

  return (
    <div className="App">
      <h1>Book Catcher</h1>
      <NewBook onAddBook={addBookHandler} />
      <Books items={bookList} />
    </div>
  );
}

export default App;
