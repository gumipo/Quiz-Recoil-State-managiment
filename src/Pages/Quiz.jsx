import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { getIdsApi } from "../services/api";
import { randomQuizById } from "../atoms/selectors/randomchoices";
import {
  randomAnswerState,
  selectAnswerState,
  randomIdsState,
} from "../atoms/index";

const Quiz = () => {
  const history = useHistory();
  const setRandomQuizIds = useSetRecoilState(randomIdsState);
  const setSelectAnswer = useSetRecoilState(selectAnswerState);
  const [randomAnswer, setRandomAnswer] = useRecoilState(randomAnswerState);
  const randomChoices = useRecoilValue(randomQuizById);

  const resultJudgment = (index) => {
    const selectAnswer = randomChoices[index].title;
    setSelectAnswer(selectAnswer);
    if (selectAnswer === randomAnswer[0].title) {
      history.push("/correct");
    } else {
      history.push("/mistake");
    }
  };

  const randomSelect = (array, num) => {
    const newIdsArray = [];
    while (newIdsArray.length < num && array.length > 0) {
      const rand = Math.floor(Math.random() * array.length);
      newIdsArray.push(array[rand]);
    }
    return newIdsArray;
  };

  useEffect(() => {
    const getIds = async () => {
      await getIdsApi.get().then((response) => {
        const ids = response.data;
        const RANDOM_CHOICES_COUNT = 4;
        const randomQuizIds = randomSelect(ids.slice(), RANDOM_CHOICES_COUNT);
        setRandomQuizIds(randomQuizIds);
      });
    };
    getIds();
  }, []);

  useEffect(() => {
    const RANDOM_ANSWER_COUNT = 1;
    const randomAnswer = randomSelect(
      randomChoices.slice(),
      RANDOM_ANSWER_COUNT
    );
    setRandomAnswer(randomAnswer);
  }, [randomChoices]);

  return (
    <div>
      <h1>クイズ</h1>
      <h2>問題文</h2>
      {randomAnswer.length > 0 && <p>{randomAnswer[0].description}</p>}

      <ul>
        {randomChoices.length > 0 &&
          randomChoices.map((choice, index) => (
            <li key={choice.title} onClick={() => resultJudgment(index)}>
              {choice.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Quiz;
