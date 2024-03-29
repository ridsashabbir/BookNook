import PropTypes from "prop-types";
import { BiShow } from "react-icons/bi";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import BookModal from "./BookModal";

const BooksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <div key={book._id} className="book-card">
      <h2 className="publish-year">{book.publishYear}</h2>
      <h4 className="book-id">{book._id}</h4>
      <div className="icon-text">
        <PiBookOpenTextLight className="icon" />
        <h2 className="title">{book.title}</h2>
      </div>
      <div className="icon-text">
        <BiUserCircle className="icon" />
        <h2 className="author">{book.author}</h2>
      </div>
      <div className="icons">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          style={{ fontSize: "28px", color: "green" }}
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`} className="info">
          <BsInfoCircle />
        </Link>
        <Link to={`/books/edit/${book._id}`} className="edit">
          <AiOutlineEdit />
        </Link>
        <Link to={`/books/delete/${book._id}`} className="delete">
          <MdOutlineDelete />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

BooksSingleCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BooksSingleCard;
