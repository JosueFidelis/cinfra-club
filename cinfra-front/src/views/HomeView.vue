<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SearchBar />
    <SongList />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import SongList from "@/components/SongList.vue";

export default {
  name: "HomeView",
  components: {
    SearchBar,
    SongList,
  },
};
</script>
