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
        "Alternativo",
        "Axé",
        "Blues",
        "Bolero",
        "Bossa Nova",
        "Brega",
        "Clássico",
        "Country",
        "Cuarteto",
        "Cumbia",
        "Dance",
        "Disco",
        "Eletrônica",
        "Emocore",
        "Fado",
        "Folk",
        "Forró",
        "Funk",
        "Funk Internacional",
        "Gospel/Religioso",
        "Grunge",
        "Guarânia",
        "Hard Rock",
        "Hardcore",
        "Heavy Metal",
        "House",
        "Indie",
        "Industrial",
        "Infantil",
        "Instrumental",
        "Jazz",
        "Jovem Guarda",
        "K-Pop",
        "MPB",
        "Mambo",
        "Mariachi",
        "Merengue",
        "Música andina",
        "New Age",
        "New Wave",
        "Pagode",
        "Pop",
        "Sertanejo",
        "Pop Rock",
        "Rock and Roll",
        "Hip Hop/Rap",
        "Surf Music",
        "Rockabilly",
        "Reggae",
        "Rock Progressivo",
        "Soul",
        "Rock",
        "Post-Rock",
        "Psicodelia",
        "Punk Rock",
        "Ranchera",
        "Reggaeton",
        "Regional",
        "Soft Rock",
        "Romântico",
        "Salsa",
        "Samba",
        "Samba Enredo",
        "Ska",
        "Tango",
        "Tecnopop",
        "Trova",
        "Velha Guarda",
        "World Music",
        "Zamba",
        "Zouk",
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
