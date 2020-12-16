import React, { useEffect } from "react";
// import FetchData from "Network";
import { BorderBox } from "components/utils";
import { globalConst } from "components/utils/variables";
import Card from "./card";
import Heading from "components/utils/Heading";

import { loadBooks } from "actions/index.js";
import { connect } from "react-redux";

const Home = ({ loadBooks, data }) => {
  useEffect(() => {
    if (data.length === 0) {
      loadBooks();
    }
  }, []);

  const renderList = () => {
    return data.map((item, i) => {
      return <Card key={i} book={item} />;
    });
  };
  return (
    <>
      <Heading heading={globalConst.homePageTitle} />
      <div className="container">
        <BorderBox>{renderList()}</BorderBox>
      </div>
    </>
  );
};

const mapStateToProps = ({ books }) => ({
  data: books.books,
});

export default connect(mapStateToProps, { loadBooks })(Home);
