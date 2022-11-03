<template>
  <div class="container">
    <ul class="frame">
      <li v-for="song in getSongs" :key="song._id" class="result">
        <a :href="song.url" target="_blank">{{ song.song }}</a>
        <p>{{ song.chords.join(", ") }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    getSongs() {
      return this.$store.state.songs;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

a:link {
  color: #803436;
}

a:hover {
  color: #ba383b;
}

a:visited {
  color: #270f10;
}
.container {
  display: flex;
  justify-content: center;
}
.result {
  font-size: 18px;
  font-weight: bold;
}

.frame {
  background-color: #e4bcbc;
  border-radius: 25px;
  width: 30%;
  padding: 32px;
}

ul {
  list-style-type: none;
}
</style>
