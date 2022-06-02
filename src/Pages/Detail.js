import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner"
import useShowDetail from "../Hooks/useShowDetail"
import noImage from "../Images/No-Image-Placeholder.png";
import starIcon from "../Images/star-icon.svg";
import "../Styles/Detail.scss";

const Detail = () => {
  const { id } = useParams();
  const { loading, details } = useShowDetail(id);

  const formatRating = (rating) => {
    return `${rating || "(unrated)"} / 10`;
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="detail">
          <h1 className="title">{details.name}</h1>
          <img
            src={details.image?.original || noImage}
            alt=""
            className="image"
          />

          <div className="rating">
            <img src={starIcon} alt="" className="icon" />
            <span className="text">{formatRating(details.rating.average)}</span>
          </div>
          <div className="description">
            <h2>Description</h2>
            {details.summary ? (
              <p className="enabled">
                {details?.summary.replace(/(<([^>]+)>)/gi, "")}
              </p>
            ) : (
              <p className="disabled">(No decription available)</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
