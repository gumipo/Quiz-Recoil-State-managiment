import axios from "axios";

export const getIdsApi = axios.create({
  baseURL: "https://uxdaystokyo.com/glossary-app-api/GlossaryIds.php",
});

export const getQuizApi = axios.create({
  baseURL: "https://uxdaystokyo.com/glossary-app-api",
});
