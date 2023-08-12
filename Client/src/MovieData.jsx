import axios from "axios";

export async function fetchMovieData(movieName) {
  try {
    const response = await axios.get(
      `http://localhost:3000/search?query=${movieName}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
}
