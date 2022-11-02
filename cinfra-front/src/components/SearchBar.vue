<template>
  <div>
    <form @submit="sendData" @keyup.enter="sendData">
      <label for="chords">Choose the chords:</label>
      <input type="search" name="chords" id="chords" v-model="chords" />
      <label for="genre">Choose a genre:</label>
      <select id="genre" name="genre" v-model="genre">
        <option value="volvo">Rock</option>
        <option value="saab">Pop</option>
        <option value="fiat">Samba</option>
        <option value="audi">Pagode</option>
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

      console.log(this.chords);
      console.log(this.genre);
    },
  },
};
</script>

<style scoped></style>
