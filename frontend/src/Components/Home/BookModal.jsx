import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import PropTypes from "prop-types";
import "./BookModal.css";

const BookModal = ({ book, onClose }) => {
  const handleModalClick = (event) => {
    // Check if the click is outside the modal content
    if (!event.target.closest(".modal-content")) {
      onClose();
    }
  };

  return (
    <div className="fixed-overlay" onClick={handleModalClick}>
      <div
        onClick={(event) => event.stopPropagation()}
        className="modal-content"
      >
        <AiOutlineClose className="close-icon" onClick={onClose} />
        <h2 className="publish-year-badge">{book.publishYear}</h2>
        <h4 className="book-details">{book._id}</h4>
        <div className="icon-text">
          <PiBookOpenTextLight className="text-icon" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="icon-text">
          <BiUserCircle className="text-icon" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4 book-description">Anything You want to show</p>
        <p className="my-2 book-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
    </div>
  );
};

BookModal.propTypes = {
  book: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookModal;
