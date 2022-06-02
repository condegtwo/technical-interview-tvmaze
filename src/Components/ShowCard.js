import React from "react";
import { useNavigate } from "react-router-dom";
import noImage from "../Images/No-Image-Placeholder.png";
import "../Styles/Showcard.scss"

const ShowCard = ({ id, img, rating, name, genres }) => {
  const navigate = useNavigate();

  const formatRating = (rating) => {
    return `${rating || "(unrated)"} / 10`;
  };

  const handleDetails = () => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  return (
    <div className="showcard" onClick={handleDetails}>
      {rating && <div className="rating">{formatRating(rating)}</div>}
      <img className="image" src={img || noImage} alt="" />
      <div className="details">
        <span className="details-rating">{formatRating(rating)}</span>
        <span className="details-name">{name}</span>
        {genres &&
          !!genres.length &&
          genres.map((genre, i) => (
            <span className="details-genre" key={i}>
              {genre}
            </span>
          ))}
      </div>
    </div>
  );
};

const MemoizedShowCard = React.memo(
  ShowCard,
  (prevProps, nextProps) => prevProps.id !== nextProps.id
);

export default MemoizedShowCard;
