<template>
  <div>
    <div>
      <ul>
        <li v-for="song in getSongs" :key="song._id">
          <a :href="song.url" target="_blank">{{ song.song }}</a>
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
};
</script>

<style scoped></style>
