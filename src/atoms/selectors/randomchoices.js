import { selector } from "recoil";
import { randomIdsState } from "../index";
import { getQuizApi } from "../../services/api";

export const randomQuizById = selector({
  key: "randomQuizById",
  get: async ({ get }) => {
    const randomQuizIds = get(randomIdsState);
    const randomQuiz = await Promise.all(
      randomQuizIds.map((id) =>
        getQuizApi
          .get(`/GlossaryDetail.php?glossary-id=${id}`)
          .then((result) => {
            return result.data;
          })
      )
    );
    return randomQuiz;
  },
});
