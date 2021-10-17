<template>
  <div class="playing-song__wrapper">
    <div class="thumbnail">
      <img src="../../assets/images/song-thumbnail.png" alt="Song thumbnail" />
      <div class="song-info"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayingSong",
};
</script>

<style lang="scss" scoped>
.playing-song__wrapper {
  img {
    width: 100%;
  }
}
</style>