import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBackButton } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBackButton(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
