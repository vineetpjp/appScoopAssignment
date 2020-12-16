import React from "react";
import { connect } from "react-redux";
import { globalConst } from "components/utils/variables";
import Heading from "components/utils/Heading";

import "./index.scss";
import { BorderBox } from "components/utils";
const Book = ({ data, match }) => {
  const id = match.params.id;

  const findBook = (id) => {
    const book = data.find((item) => {
      return item.id === id;
    });
    if (!book) {
      return <div className="">Book does not exist</div>;
    }
    const {
      authors,
      title,
      imageLinks: { thumbnail },
    } = book.volumeInfo;
    return (
      <>
        <Heading heading={globalConst.detailPageTitle} />
        <BorderBox>
          <div className="book-detail">
            <div className="book-detail__image">
              <img src={thumbnail} />
            </div>
            <div className="book-detail__description">
              <div>
                {globalConst.detailCardAuthors} : {authors}
              </div>
              <div>
                {globalConst.detailCardTitle} : {title}
              </div>
            </div>
          </div>
        </BorderBox>
      </>
    );
  };

  return <div>{findBook(id)}</div>;
};

const mapStateToProps = ({ books }) => ({
  data: books.books,
});

export default connect(mapStateToProps, null)(Book);
