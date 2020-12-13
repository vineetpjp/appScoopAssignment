import React, { useEffect, useState } from "react";
import FetchData from "Network";
import { BorderBox } from "components/utils";
import Card from "./card";
import Heading from "components/utils/Heading";

import { getBooks } from "actions/index.js";
import { connect } from "react-redux";

const Home = ({ getBooks, data }) => {
  useEffect(() => {
    if (data.length == 0) {
      getBooks();
    }
  }, []);

  const renderList = () => {
    return data.map((item, i) => {
      console.log(item);
      return <Card key={i} book={item} />;
    });
  };
  return (
    <>
      <Heading heading="Book Store" />
      <div className="container">
        <BorderBox>{renderList()}</BorderBox>
      </div>
    </>
  );
};

const mapStateToProps = ({ books }) => ({
  data: books.books,
});

export default connect(mapStateToProps, { getBooks })(Home);
