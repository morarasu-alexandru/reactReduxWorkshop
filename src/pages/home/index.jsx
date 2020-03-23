import React from "react";
import Button from "@material-ui/core/Button";
import { pageKeys } from "../../reducers/navigation";
import { changePage } from "../../actions/navigation";
import { useDispatch, useSelector } from "react-redux";

import logo from '../../statics/img/reduxlogo.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.navigation.page);

  const goNextPageAction = () => {
    const currentPageNumber = parseInt(Object.keys(pageKeys).find(key => pageKeys[key] === page));

    dispatch(changePage(pageKeys[currentPageNumber + 1]))
  };

  return <div className="homePageContainer">
    <div style={{marginBottom: '40px'}}>
      <h1 style={{marginBottom: '20px'}}>React with Redux workshop</h1>
      <img style={{maxHeight: '30vh'}} src={logo} alt="Redux Logo" />
    </div>
    <div>
      <Button onClick={goNextPageAction} variant="contained" color="primary" size={"large"}>Start </Button>
    </div>
  </div>
};

export default HomePage;
