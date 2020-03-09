import React from "react";
import {useSelector} from "react-redux";
import AppBar from '@material-ui/core/AppBar';

const Header = () => {
  const page = useSelector((state) => state.navigation.page);

  return <AppBar className="header" position={"static"}>
    <h1 style={{textAlign: 'center'}}>{page}</h1>
  </AppBar>

};

export default Header;
