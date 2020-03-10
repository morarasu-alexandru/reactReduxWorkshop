import React, {Fragment} from "react";
import {useSelector} from "react-redux";

import HomePage from "../pages/home";
import FirstPage from "../pages/first";
import {pageKeys} from "../reducers/navigation";
import Footer from "../containers/footer";
import Header from "../containers/header";
import SecondPage from "../pages/second";

const CustomRouter = () => {
  const page = useSelector(state => state.navigation.page);

  const renderSwitchPage = page => {
    switch (page) {
      case pageKeys[0]:
        return <HomePage/>;

      case pageKeys[1]:
        return <FirstPage/>;

      case pageKeys[2]:
        return <SecondPage/>;

      default:
        return <HomePage/>;
    }
  };

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
