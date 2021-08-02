import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAddButton } = props;

  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAddButton}>追加</button>
    </div>
  );
};
