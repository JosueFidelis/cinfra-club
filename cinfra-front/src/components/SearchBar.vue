<template>
  <div>
    <form @submit="sendData" @keyup.enter="sendData">
      <div class="titles">
        <label for="chords">Choose the chords:</label>
      </div>
      <div>
        <input
          type="search"
          name="chords"
          class="input"
          v-model="chords"
          placeholder="  Am*, C*, *"
        />
      </div>
      <div class="titles">
        <label for="genre">Choose a genre:</label>
      </div>
      <div>
        <select id="genre" name="genre" class="input" v-model="genre">
          <option v-for="option in genreOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div>
        <button type="submit" class="button">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chords: "",
      genre: "",
      genreOptions: [
        "Todos",
        "Gospel/Religioso",
        "Sertanejo",
        "Pop Rock",
        "MPB",
        "Forró",
        "Rock and Roll",
        "Hip Hop/Rap",
        "Pop",
        "Hard Rock",
        "Surf Music",
        "Rockabilly",
        "Reggae",
        "Pagode",
        "Rock Progressivo",
        "Soul",
        "Bossa Nova",
        "Rock",
        "Brega",
        "Alternativo",
        "Indie",
        "Folk",
        "Heavy Metal",
        "Grunge",
        "R&B",
        "Samba",
        "Jovem Guarda",
        "Reggaeton",
        "Marchas/Hinos",
        "Hardcore",
        "Jazz",
        "Infantil",
        "Soft Rock",
        "New Wave",
        "Axé",
        "Blues",
        "Funk",
        "Punk Rock",
        "Instrumental",
        "Regional",
      ],
    };
  },
  methods: {
    sendData(e) {
      e.preventDefault();

      const genreToSend = this.genre === "Todos" ? "" : this.genre;

      this.$store.dispatch("getSongs", {
        chords: this.chords,
        genre: genreToSend,
      });
    },
  },
};
</script>

<style scoped>
.titles {
  margin: 8px;
}

.button {
  margin-top: 16px;
  background-color: #ca3538;
  border: 0px;
  border-radius: 10px;
  padding: 8px;
  padding-inline: 16px;
  margin-bottom: 32px;
  color: #f1eee9;
  font-weight: bold;
}

.input {
  border-radius: 25px;
  border: 2px solid rgb(0, 0, 0);
  width: 200px;
  height: 24px;
}
</style>
