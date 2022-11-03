import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3333`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getSongs(chords, genres) {
    const config = {
      headers: { chords, genres },
    };

    return apiClient.get("/songs", config);
  },
  getGenres() {
    return apiClient.get("/genres");
  },
};
