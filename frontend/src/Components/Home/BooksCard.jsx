import PropTypes from "prop-types";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <div key={item._id} style={{}}>
          <h2 style={{}}>{item.publishYear}</h2>
          <h4 style={{}}>{item._id}</h4>
          <div>
            <PiBookOpenTextLight />
            <h2 style={{}}>{item.title}</h2>
          </div>
          <div>
            <BiUserCircle />
            <h2 style={{}}>{item.author}</h2>
          </div>
          <div>
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
            </Link>
            <Link to={`/books/delete/${item._id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksCard;
