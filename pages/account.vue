<template>
  <div class="the-div">
    <Navbar />
    <div class="account">
      <md-avatar class="md-large avatar-img">
        <img :src="userimage" @error="setAltImg" alt="Avatar" />
      </md-avatar>
      <h1>{{ username }}</h1>
      <h3>Amount in account : ${{ amount }}</h3>
      <h3>NFT you have</h3>
      <div v-if="nft">
        <!-- dvkjdvnn -->
      </div>
      <div v-else>No any NFT 😢</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.user,
      userimage: this.$store.state.userimage,
      amount: this.$store.state.amount,
      nft: this.$store.state.nft,
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
.the-div {
  height: 100vh;
}
.account {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
}
.avatar-img {
  min-width: 100px !important;
  min-height: 100px !important;
}
</style>
