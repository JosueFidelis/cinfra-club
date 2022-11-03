<template>
  <div>
    <form @submit="sendData" @keyup.enter="sendData">
      <label for="chords">Choose the chords:</label>
      <input type="search" name="chords" id="chords" v-model="chords" />
      <label for="genre">Choose a genre:</label>
      <select id="genre" name="genre" v-model="genre">
        <option value="Sertanejo">Sertanejo</option>
        <option value="Folk">Folk</option>
        <option value="Pop Rock">Pop Rock</option>
        <option value="Pop">Pop</option>
      </select>
      <button type="submit">enviar</button>
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

<style scoped></style>
