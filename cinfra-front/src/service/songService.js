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
  getSongs(chords, genre) {
    const config = {
      headers: { chords, genre },
    };

    return apiClient.get("/songs", config);
  },
  getGenres() {
    return apiClient.get("/genres");
  },
};
