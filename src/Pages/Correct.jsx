import React from "react";
import { useHistory } from "react-router-dom";

const Correct = () => {
  const history = useHistory();
  return (
    <div>
      <h1>正解</h1>
      <button onClick={() => history.goBack()}>Quizに戻る</button>
    </div>
  );
};

export default Correct;
