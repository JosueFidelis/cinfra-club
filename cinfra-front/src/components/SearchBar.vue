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
          placeholder="Am*, C*, *"
        />
      </div>
      <div class="titles">
        <label for="genre">Choose a genre:</label>
      </div>
      <div>
        <select id="genre" name="genre" class="input" v-model="genre">
          <option value="Sertanejo">Sertanejo</option>
          <option value="Folk">Folk</option>
          <option value="Pop Rock">Pop Rock</option>
          <option value="Pop">Pop</option>
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
    };
  },
  methods: {
    sendData(e) {
      e.preventDefault();

      this.$store.dispatch("getSongs", {
        chords: this.chords,
        genre: this.genre,
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
  color: #f1eee9;
  font-weight: bold;
}

.input {
  border-radius: 25px;
  border: 2px solid rgb(0, 0, 0);
  padding: 10px;
  width: 200px;
  height: 10px;
}
</style>
