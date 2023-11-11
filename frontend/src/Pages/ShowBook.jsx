// Import necessary dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner"; // Assuming you have a Spinner component
import "./ShowBook.css"; // Import your custom CSS file

// Define your ShowBook component
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container">
      <BackButton />
      <h1 className="header">Book Information</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="book-container">
          <div className="info-item">
            <span className="label">Id: </span>
            <span className="content">{book._id}</span>
          </div>
          <div className="info-item">
            <span className="label">Title: </span>
            <span className="content">{book.title}</span>
          </div>
          <div className="info-item">
            <span className="label">Author: </span>
            <span className="content">{book.author}</span>
          </div>
          <div className="info-item">
            <span className="label">Publish Year: </span>
            <span className="content">{book.publishYear}</span>
          </div>
          <div className="info-item">
            <span className="label">Create Time: </span>
            <span className="content">
              {new Date(book.createdAt).toString()}
            </span>
          </div>
          <div className="info-item">
            <span className="label">Last Update Time: </span>
            <span className="content">
              {new Date(book.updatedAt).toString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
