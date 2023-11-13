import PropTypes from "prop-types";
import "./BooksCard.css"; // Import your CSS file

const BooksCard = ({ books }) => {
  return (
    <div className="books-container">
      {books.map((item) => (
        
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksCard;
