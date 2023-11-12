import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import "./Home.css";
import BooksTable from "../Components/Home/BooksTable";
import BooksCard from "../Components/Home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 flex flex-col items-center">
      <div
        className="flex justify-center items-center gap-x-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          style={{
            color: "white",
            backgroundColor: "purple",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
          }}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          style={{
            color: "white",
            backgroundColor: "purple",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            // margin: "10px",
          }}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <h1
        className="text-3xl my-8"
        style={{ textAlign: "center", color: " #701a70" }}
      >
        Books List
      </h1>
      <div className="mt-4 self-end">
        <Link to="/books/create">
          <MdOutlineAddBox
            className="text-sky-500 text-4xl"
            style={{
              display: "flex",
              float: "right",
              marginRight: "20px",
              fontSize: "30px",
            }}
          />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
