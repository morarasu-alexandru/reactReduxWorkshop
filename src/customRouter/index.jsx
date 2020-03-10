import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import HomePage from "../pages/home";
import FirstPage from "../pages/first";
import {pageKeys} from "../reducers/navigation";
import Footer from "../containers/footer";
import Header from "../containers/header";
import SecondPage from "../pages/second";
import {getLocalStorageSteps} from "../utils/localStorage";
import {updateSteps} from "../actions/solvingSteps";

const CustomRouter = () => {
  const page = useSelector(state => state.navigation.page);
  const dispatch = useDispatch();

  useEffect(() => {console.log('once');
    const localStorageSteps = getLocalStorageSteps();

    if(localStorageSteps) dispatch(updateSteps(localStorageSteps))
  }, []);

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
