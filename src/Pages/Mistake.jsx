import React from "react";
import { useHistory } from "react-router-dom";

const Mistake = () => {
  const history = useHistory();
  return (
    <div>
      <h1>不正解</h1>
      <button onClick={() => history.goBack()}>Quizに戻る</button>
    </div>
  );
};

export default Mistake;
