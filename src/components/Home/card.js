import React from "react";
import { Link } from "react-router-dom";

import history from "../../history";
import "./index.scss";
const Card = ({ book }) => {
  const {
    authors,
    title,
    imageLinks: { smallThumbnail, thumbnail },
  } = book.volumeInfo;
  const onClickHandler = () => {
    history.push(`/books/${book.id}`);
  };

  return (
    <div className="card_container" onClick={onClickHandler}>
      <div className="card">
        <div className="card__image">
          <img src={smallThumbnail} alt={title} />
        </div>
        <div className="card__content">
          <div className="card__description">
            <div className="card__description--title">
              <div>
                <b>Title</b>
              </div>
              <div>{title}</div>
            </div>
            <div className="card__description--author">
              <div>
                <b>Author</b>
              </div>
              <div>{authors}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
