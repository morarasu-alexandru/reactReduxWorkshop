import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../../actions/navigation";
import {pageKeys} from "../../reducers/navigation";

const Footer = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.navigation.page);

  const goPreviousPageAction = () => {
    const currentPageNumber = parseInt(Object.keys(pageKeys).find(key => pageKeys[key] === page));

    dispatch(changePage(pageKeys[currentPageNumber - 1]))
  };

  const goNextPageAction = () => {
    const currentPageNumber = parseInt(Object.keys(pageKeys).find(key => pageKeys[key] === page));

    dispatch(changePage(pageKeys[currentPageNumber + 1]))
  };

  return <AppBar className="footer" position="static">
      <Button
        onClick={goPreviousPageAction}
        className="buttonFooter"
        variant="contained"
        color="secondary"
        disabled={page === pageKeys[0]}
        startIcon={<NavigateBeforeIcon />}>
        Previous
      </Button>
      <Button
        onClick={goNextPageAction}
        className="buttonFooter"
        variant="contained"
        color="secondary"
        disabled={page === pageKeys[5]}
        endIcon={<NavigateNextIcon />}>
        Next
      </Button>
    </AppBar>
};

export default Footer;
