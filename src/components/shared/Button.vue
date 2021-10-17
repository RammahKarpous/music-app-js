<template>
  <div class="button" @click="logWord">Add playlist</div>
</template>

<script>
export default {
  name: "Button",
  methods: {
    logWord() {
      console.log('Word');
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background: #f44d29;
  width: calc(100% - 40px);
  padding: 20px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: darken(#f44d29, 5%);
  }
}
</style>