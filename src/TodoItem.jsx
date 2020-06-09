import React from 'react';

export default function TodoItem({ index, todo, handleRemoveTodo }) {
  const liStyle = {
    listStyleType: 'none',
  };

  return (
    <li style={liStyle} key={index}>
      {`${index}. ${todo} `}
      <button type="button" onClick={() => handleRemoveTodo(index)}>
        완료
      </button>
    </li>
  );
}
