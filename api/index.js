const axios = require("axios");
const { response } = require("express");

axios
  .get(
    "https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=52c0f60e0ba0d8d7b35e7e7300515a86"
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
