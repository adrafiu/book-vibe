import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addStoredDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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

  const handleMarkAsRead = (id) => {
    //  Store with Id
    // where to store
    // array or collection
    // if book already exist  the show a  alart
    //  if book not exist then push in the collection or array

    // MySwal.fire({
    //   title: <p>Hello World</p>,
    //   didOpen: () => {
    //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    //     MySwal.showLoading();
    //   },
    // }).then(() => {
    //   return MySwal.fire(<p>Shorthand works too</p>);
    // });

    toast("Wow so easy!");

    addStoredDB(id);
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <img className="w-72" src={image} alt="" />
        <h5 className="text-center font-bold">{bookName}</h5>
        <ToastContainer />
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2 "
        >
          Mark as Read
        </button>
        <button className="btn btn-info ">Add to WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
