import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import HomePage from "../pages/home";
import FirstPage from "../pages/first";
import {pageKeys} from "../reducers/navigation";
import Footer from "../containers/footer";
import Header from "../containers/header";
import SecondPage from "../pages/second";
import { getLocalStoragePage, getLocalStorageSteps } from "../utils/localStorage";
import {updateSteps} from "../actions/solvingSteps";
import ThirdPage from "../pages/third";
import { changePage } from "../actions/navigation";
import ForthPage from "../pages/forth";

const CustomRouter = () => {
  const page = useSelector(state => state.navigation.page);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const localStorageSteps = getLocalStorageSteps();
  //
  //   if(localStorageSteps) dispatch(updateSteps(localStorageSteps))
  // }, []);

  useEffect(() => {
    const localStoragePage = getLocalStoragePage();

    if (localStoragePage) {
      dispatch(changePage(localStoragePage))
    }
  },[]);

  const renderSwitchPage = page => {
    switch (page) {
      case pageKeys[0]:
        return <HomePage/>;

      case pageKeys[1]:
        return <FirstPage/>;

      case pageKeys[2]:
        return <SecondPage/>;

      case pageKeys[3]:
        return <ThirdPage/>;

      case pageKeys[4]:
        return <ForthPage/>;

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
