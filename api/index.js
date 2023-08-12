const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000; // Use the port you prefer

app.get("/search", async (req, res) => {
  const { query } = req.query;
  const apiKey = "52c0f60e0ba0d8d7b35e7e7300515a86";
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
