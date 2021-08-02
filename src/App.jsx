import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  // TodoTextの入力が変わった時のイベント
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン
  const onClickAddButton = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン
  const onClickDeleteButton = (index) => {
    deleteTodoItem(index);
  };

  // 完了ボタン
  const onClickCompleteButton = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    deleteTodoItem(index);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickRestoreButton = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  const deleteTodoItem = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onClickAddButton={onClickAddButton}
        onChangeTodoText={onChangeTodoText}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickCompleteButton={onClickCompleteButton}
        onClickDeleteButton={onClickDeleteButton}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickBackButton={onClickRestoreButton}
      />
    </>
  );
};
