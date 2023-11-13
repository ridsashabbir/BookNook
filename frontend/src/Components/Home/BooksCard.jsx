import PropTypes from "prop-types";
import "./BooksCard.css"; // Import your CSS file
import BooksSingleCard from "./BooksSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="books-container">
      {books.map((item) => (
        <BooksSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksCard;
