// import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";

const BooksSingleCard = () => {
  return (
    <div key={item._id} className="book-card">
      <h2 className="publish-year">{item.publishYear}</h2>
      <h4 className="book-id">{item._id}</h4>
      <div className="icon-text">
        <PiBookOpenTextLight className="icon" />
        <h2 className="title">{item.title}</h2>
      </div>
      <div className="icon-text">
        <BiUserCircle className="icon" />
        <h2 className="author">{item.author}</h2>
      </div>
      <div className="icons">
        <Link to={`/books/details/${item._id}`} className="info">
          <BsInfoCircle />
        </Link>
        <Link to={`/books/edit/${item._id}`} className="edit">
          <AiOutlineEdit />
        </Link>
        <Link to={`/books/delete/${item._id}`} className="delete">
          <MdOutlineDelete />
        </Link>
      </div>
    </div>
  );
};

export default BooksSingleCard;
