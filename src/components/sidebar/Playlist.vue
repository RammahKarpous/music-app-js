<template>
  <div class="playlist-wrapper">
    <Button />
    <ul class="playlists">
      <li class="playlist-name active-playlist">
        <a href="#">Lorem ipsum</a>
        <span class="border"></span>
      </li>
      <li class="playlist-name">
        <a href="#">dolor sit</a>
        <span class="border"></span>
      </li>
      <li class="playlist-name">
        <a href="#">amet consectetur</a>
        <span class="border"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from "../shared/Button.vue";

export default {
  name: "Playlist",
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.playlist-wrapper {
  width: 100%;

  .playlists {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    width: 100%;

    .playlist-name {
      position: relative;
      list-style-type: none;
      width: 100%;

      a {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        padding: 20px;
        width: calc(100% - 40px);
        background: transparent;
        transition: 0.4s;

        &:hover {
          background: #161413;
        }
      }

      .border {
        height: 3px;
        background: #f44d29;
        position: absolute;
        bottom: 0;
        left: 20px;
        transition: 0.4s;
      }

      &.active-playlist {
        background: #161413;

        .border {
          width: 30px;
        }
      }
    }
  }
}
</style>