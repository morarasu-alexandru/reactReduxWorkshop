import React from 'react';

const InstructionsList = (props) => {
  const {list, toggleStepIsDoneAction} = props;

  return (
    <ul>
      {list.map((item, index) =>
        <li className="instructionsItem" style={{textDecoration: item.isDone ? "line-through" : ""}} key={index} onClick={() => toggleStepIsDoneAction(index)}>
          {item.step}
        </li>
      )}
    </ul>
  );
};

export default InstructionsList;
