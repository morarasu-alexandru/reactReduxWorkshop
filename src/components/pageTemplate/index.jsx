import React from 'react';

const PageTemplate = (props) => {
  return (
    <div className="wrapperExercise">
      <div className="exerciseDescription">
        {props.children[0]}
      </div>
      <div className="exercise exerciseLeft">
        {props.children[1]}
      </div>
      <div className="exercise exerciseRight">
        {props.children[2]}
      </div>
    </div>
  );
};

export default PageTemplate;
