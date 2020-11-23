import React from "react";
import { useHistory } from "react-router-dom";

const Correct = () => {
  const history = useHistory();
  return (
    <div>
      <p>正解</p>
      <button onClick={() => history.goBack()}>Quizに戻る</button>
    </div>
  );
};

export default Correct;
