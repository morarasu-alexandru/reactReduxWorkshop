import React from 'react';
import Button from "@material-ui/core/Button";

import ExerciseSocket from "../../../components/exerciseSocket";
import { getComments } from "../../../api";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const ForthExercise = () => {
  const posts = useSelector(state => state.posts.posts);
  const isLoading = useSelector(state => state.posts.isLoading);

  const dispatch = useDispatch();

  const getData = () => {
    getComments()
      .then((data) => {
        console.log('data: ', data);
      })
  };

  return (
    <ExerciseSocket title="Todo list Exercise">
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

export default ForthExercise;
