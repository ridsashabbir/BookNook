import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch book details when component mounts
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBookDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check the console.");
        console.log(error);
      });
  }, [id]);

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check the console.");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1
        className="text-3xl my-4"
        style={{ color: " #701a70", textAlign: "center" }}
      >
        Delete Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            border: "2px solid grey",
            padding: "30px",
            textAlign: "center",
            width: "350px",
            margin: "auto",
            borderRadius: "7px",
          }}
        >
          <h3 style={{ fontFamily: "Calibri" }}>
            Are you sure you want to delete the book `{bookDetails.title}`?
          </h3>

          <button
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              width: "60%",
              padding: "10px",
              borderRadius: "10px",
            }}
            onClick={handleDeleteBook}
          >
            Yes, Delete it
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
