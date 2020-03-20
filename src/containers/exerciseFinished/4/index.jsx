import React from 'react';
import ExerciseSocket from "../../../components/exerciseSocket";
import { getComments } from "../../../api";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

import { getPostsFinished, getPostsFulfilledFinished } from "../../../actions/postsFinished";
import { CircularProgress } from "@material-ui/core";

const ForthExerciseFinished = () => {
  const posts = useSelector(state => state.postsFinished.posts);
  const isLoading = useSelector(state => state.postsFinished.isLoading);

  const dispatch = useDispatch();

  const getPostsAction = () => dispatch(getPostsFinished());
  const getPostsFulfilledAction = (data) => dispatch(getPostsFulfilledFinished(data));


  const getData = () => {
    getPostsAction();
    getComments()
      .then((data) => {
        console.log('data: ', data);

        getPostsFulfilledAction(data);
      })
  };

  return (
    <ExerciseSocket title="Get posts Exercise Finished">
      <div className="socketContainer">
        <div style={{marginBottom: '10px'}}>
          <Button onClick={getData} variant="outlined" size="small">
            get data
          </Button>
        </div>
        <div>
          {isLoading
            ? <CircularProgress />
            : <ul>
              {posts.map((elem, index) => <li style={{marginBottom: '10px'}} key={index}> > {elem.body}</li>)}
            </ul>
          }
        </div>
      </div>

    </ExerciseSocket>
  );
};

export default ForthExerciseFinished;
