import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
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
      <h1 className="text-3xl my-8" style={{ textAlign: "center" }}>
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
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="custom-table">
            <thead className="custom-header">
              <tr>
                <th>No</th>
                <th>Title</th>
                <th className="md:hidden">Author</th>
                <th className="md:hidden">Publish Year</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody className="custom-body">
              {books.map((book, index) => (
                <tr key={book._id} className="h-8">
                  <td
                    style={{
                      backgroundColor: "beige",
                      color: "green",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td>{book.title}</td>
                  <td className="md:hidden">{book.author}</td>
                  <td className="md-hidden">{book.publishYear}</td>
                  <td
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        {/* <BsInfoCircle className="text-green-500" /> */}
                        <BsInfoCircle
                          style={{ color: "green", marginLeft: "7px" }}
                        />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        {/* <AiOutlineEdit className="text-yellow-500" /> */}
                        <AiOutlineEdit
                          style={{ color: "orange", marginLeft: "7px" }}
                        />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        {/* <MdOutlineDelete className="text-red-500" /> */}
                        <MdOutlineDelete
                          style={{ color: "red", marginLeft: "7px" }}
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
