<template>
  <div>
    <div>
      <ul>
        <li v-for="song in getSongs" :key="song.name">
          <p>{{ song.name }}</p>
          <p>{{ song.link }}</p>
          <p>{{ song.chords.join(", ") }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getSongs() {
      return this.$store.state.songs;
    },
  },
  data() {
    return {
      songs: [
        { name: "hello", link: "www.site.com", chords: ["A", "B"] },
        { name: "world", link: "www.site2.com", chords: ["B", "C"] },
      ],
    };
  },
};
</script>

<style scoped></style>
