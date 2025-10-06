import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const bookId = parseInt(id);
  const data = useLoaderData();
  // console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  // console.log(id, data);
  const { bookName, image } = singleBook;

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-72" src={image} alt="" />
      <h5 className="">{bookName}</h5>
      <button className="btn btn-accent m-2 ">Mark as Read</button>
      <button className="btn btn-info ">Add to WishList</button>
    </div>
  );
};

export default BookDetails;
