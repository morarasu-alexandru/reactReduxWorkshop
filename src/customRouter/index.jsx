import React, {Fragment} from "react";
import {useSelector} from "react-redux";

import Home from "../pages/home";
import First from "../pages/first";
import {pageKeys} from "../reducers/navigation";
import Footer from "../containers/footer";
import Header from "../containers/header";

const CustomRouter = () => {
  const page = useSelector(state => state.navigation.page);

  const renderSwitchPage = page => {
    switch (page) {
      case pageKeys[0]:
        return <Home/>;

      case pageKeys[1]:
        return <First/>;

      default:
        return <Home/>;
    }
  };

  console.log("page: ", page);

  return <Fragment>
    <Header/>
    <div className="container">
      <div className="main">
        {renderSwitchPage(page)}
      </div>
      <Footer/>
    </div>
  </Fragment>;
};

export default CustomRouter;
