// import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

const BooksTable = ({ books }) => {
  return (
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
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {book.title}
              </td>
              <td
                className="md:hidden"
                style={{
                  textAlign: "center",
                }}
              >
                {book.author}
              </td>
              <td
                className="md-hidden"
                style={{
                  textAlign: "center",
                }}
              >
                {book.publishYear}
              </td>
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
  );
};

BooksTable.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksTable;
