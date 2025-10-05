import React, { Suspense, useEffect, useState } from "react";
import { data } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  //data load-1
  //   useEffect(() => {
  //     fetch(
  //       "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setAllBooks(data);
  //       });
  //   }, []);

  //data load-2
  const bookPromise = fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  ).then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <Book bookPromise={bookPromise}></Book>
      </Suspense>
    </div>
  );
};

export default Books;
