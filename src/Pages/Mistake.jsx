import React from "react";
import { useHistory } from "react-router-dom";

const Mistake = () => {
  const history = useHistory();
  return (
    <div>
      <p>不正解</p>
      <button onClick={() => history.goBack()}>Quizに戻る</button>
    </div>
  );
};

export default Mistake;
