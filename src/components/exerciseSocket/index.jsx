import React from 'react';

const ExerciseSocket = (props) => {

  const {title} = props;
  return (
    <div className="exerciseSocketWrapper">
      <div className="subTitleWrapper">
        <h2 className="subTitle">{title}</h2>
      </div>
      <div className="exerciseSocket">
        {props.children}
      </div>
    </div>
  );
};

export default ExerciseSocket;
