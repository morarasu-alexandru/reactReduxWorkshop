import React from "react";
import { useSelector } from "react-redux";

import Home from "../pages/home";
import First from "../pages/first";
import { pageKeys } from "../reducers/navigation";

const CustomRouter = () => {
  const page = useSelector(state => state.navigation.page);

  const renderSwitchPage = page => {
    switch (page) {
      case pageKeys.home:
        return <Home />;

      case pageKeys.first:
        return <First />;

      default:
        return <Home />;
    }
  };

  console.log("page: ", page);

  return <div>{renderSwitchPage(page)}</div>;
};

export default CustomRouter;
