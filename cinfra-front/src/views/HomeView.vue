<template>
  <div class="home">
    <img alt="Vue logo" class="responsive-img" src="../assets/cinfraclub.svg" />
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

<style scoped>
.responsive-img {
  max-width: 30%;
  height: auto;
  margin-bottom: 32px;
  margin-top: 32px;
  padding-right: 20px;
}
</style>
