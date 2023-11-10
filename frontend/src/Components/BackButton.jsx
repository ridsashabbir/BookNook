// import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft
          className="text-2xl"
          style={{
            border: "2px solid purple",
            padding: "5px", // Adjust padding as needed
            borderRadius: "5px",
            color: "white",
            backgroundColor: "purple",
            width: "30px", // Adjust the width value as needed
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string.isRequired,
};

export default BackButton;
