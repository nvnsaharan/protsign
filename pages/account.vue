<template>
  <div>
    <Navbar />
    <div class="account">
      <md-avatar class="md-large">
        <img :src="userimage" @error="setAltImg" alt="Avatar" />
      </md-avatar>
      <h1>{{ username }}</h1>
      <h3>NFTs you have</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.user,
      userimage: this.$store.state.userimage,
    };
  },
  methods: {
    setAltImg() {
      this.userimage = this.$store.state.userimage;
    },
  },
};
</script>

<style>
.account {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>
